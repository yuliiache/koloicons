interface AuthHookReturn {
  isAuthorized: boolean;
}

interface UserData {
  email: string;
  name: string;
}

const useAuth = (): AuthHookReturn => {
  // TODO: use user data from redux store for authentication checking
  const user: UserData = {
    email: '',
    name: '',
  };
  const isAuthorized = Boolean(user.email) && Boolean(user.name);

  return {isAuthorized};
};

export default useAuth;
