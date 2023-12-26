def clearOldProjects(activeProjectsPath, buildConfDir, sitesConfDir) {
    def activeProjects = sh(script: "cat ${activeProjectsPath}", returnStdout: true).trim().split('\n')
    def currentProjects = sh(script: "ls ${buildConfDir}", returnStdout: true).trim().split('\n')

    for(int i = 0; i < currentProjects.size(); i++) {
        if(!activeProjects.contains(currentProjects[i])) {
            sh( script: "sudo rm -rf ${buildConfDir}/${currentProjects[i]}")
            sh( script: "sudo rm -f ${sitesConfDir}/${currentProjects[i]}.conf")
        }
    }
}

def checkFileExist(filePath) {
    def exists = sh(script: "test -e ${filePath} && echo 'true' || echo 'false'", returnStdout: true).trim()

    return (exists == 'true') ? true : false;
}

def getFreePort(portsFile) {
    def list = sh(script: "cat ${portsFile}", returnStdout: true).trim().split('\n')
    def availablePort = 0;
    for (int i = 0; i < list.size(); i++) {
        def isBusy = sh(script: "sudo netstat -tulpn | grep \"${list[i]}\" || echo '0'", returnStatus : false, returnStdout: true).trim()
        if(isBusy == '0') {
            availablePort = list[i];
            break;
        }
    }
    sh "echo available ${availablePort}"

    return availablePort
}

def saveSlackThreadId(threadId, configFile) {
     if(checkFileExist("${configFile}")) {
        def conf = sh(script: "cat ${configFile}", returnStdout: true).trim()
        def object = readJSON text: conf
        object.slackThreadId = "" + threadId
        def jsonStr = writeJSON returnText: true, json: object
        sh "echo '${jsonStr}' | sudo tee ${configFile}"
        // writeJSON file: "${configFile}", json: object // no f**king permissions
    }
}

def getSlackThreadId(configFile) {
    def threadId = null;
    if(checkFileExist("${configFile}")) {
        def conf = sh(script: "cat ${configFile}", returnStdout: true).trim()
        def object = readJSON text: conf
        threadId = object.slackThreadId
    }
    sh "echo slackThread- ${threadId}"

    return threadId;
}

def getAssignedPort(configDir, configFile, freePortsFile) {
    def assigned_port;
    if(checkFileExist("${configDir}/${configFile}")) {
        def conf = sh(script: "cat ${configDir}/${configFile}", returnStdout: true).trim()
        def object = readJSON text: conf
        assigned_port = object.port
    }
    else {
        sh "sudo mkdir -p ${configDir}"
        assigned_port = getFreePort(freePortsFile)
        sh "echo '{port: ${assigned_port}}' | sudo tee ${configDir}/${configFile}"
    }

    return assigned_port
}

def getBranchDetails(branchName) {
    def branchInfoStr = sh(script: "gh pr list --json state,baseRefName,headRefName,url,author --head \"${branchName}\"", returnStdout: true).trim()
    def branchInfo = readJSON text: branchInfoStr
    return branchInfo[0]
}

def isPR(branchName) {
    def isOpenedPr = false;
    def branchInfo = getBranchDetails(branchName)
    if(branchInfo && branchInfo.state == "OPEN") {
        isOpenedPr = true
    }
    return isOpenedPr
}

return this