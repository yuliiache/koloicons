# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## Run project

Steps:
In your terminal

1. git clone git@github.com:IerominSergii/team-1-koloicons.git
   OR
   git clone https://github.com/IerominSergii/team-1-koloicons.git
2. cd team-1-koloicons
3. npm install
4. npm run

## Project requirements

node version 16.16.0
npm 8.17.0

VS Code extensions should be installed:

1. rvest.vs-code-prettier-eslint

## API Reference

Use httpService from http-service.js module
Example:

```sh
import {httpService} from "./http-service";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const apiEndpoint = "/icons";
const result = httpService.post(apiEndpoint, {email, password});
```

PORT=5000
REACT_APP_API_URL=http://localhost:5000/api

| category                                          | apiEndpoint                           | functions                                                                                  |
| ------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------ |
| auth                                              | /auth                                 | login(), removeJwt()                                                                       |
| users                                             | /users                                | registerUser(), getIsUserPro(), getUpdatedUser(), forgotPasswordRequest(), resetPassword() |
| categories                                        | /categories                           | getCategories()                                                                            |
| download action (fixing that icon was downloaded) | /downloadsactions                     | trackDownloadIcon()                                                                        |
| icons                                             | /icons                                | getIcons(), getIcon(), getIconsByCategory()                                                |
| getIconFile (dowloading icon file)                | /downloads:iconId                     | getIconFile()                                                                              |
| getIconsFiles (dowloading icons files)            | /downloads                            | getIconsFiles()                                                                            |
| getIconsFilesByCategory                           | /downloads/download-icons-by-category | getIconsFilesByCategory()                                                                  |
| packs                                             | /packs                                | getPacks()                                                                                 |
| cancel user subscription                          | /payments/cancel-subscription         | cancelSubscription()                                                                       |
| pricing                                           | /pricing                              | getPricing()                                                                               |
| feedbacks                                         | /feedbacks                            | getFeedbacks()                                                                             |
| faqs                                              | /faqs                                 | getFaqs()                                                                                  |

### API faqs

```sh
getFaqs();
```

### API feedbacks

```sh
getFeedbacks();
```

### API pricing

```sh
getPricing({billingInterval: "month"});
```

### API cancel user subscription

- @param {string} user email - user email

```sh
cancelSubscription({email: 'test@mail.com});
```

On success server respond:

```
`Subscription ${subscriptionId} cancelled!`
```

with status 200

### API packs

- @param {boolean} free - is category free
- @param {string} iconSize - one of '48' or '60'
  icon style (free: '48' or premium: '60')
- @param {string} pageSize - number of icons at one page
- @param {string} currentPage - current page number

```sh
getPacks({free: false, iconSize: '48', pageSize: 15, currentPage: 2});

[
  {
    name: 'Financial',
    number: 7,
    id: '5d45660c241234001664820c',
    isFree: false,
    icons: [
      {
        _id: '5d46a1f2b0135c001678dff7',
        name: 'Search',
        style: 'line',
        size: '48px'
      },
      {
        _id: '5d46a20bb0135c001678e119',
        name: 'Line chart',
        style: 'line',
        size: '48px'
      }
    ]
  }
];
```

### API auth

- @param {string} email - user email
- @param {string} password - user password

```sh
login({email: 'test@gmail.com', password: '12345'});
removeJwt()
```

### API users

- @param {Object} user - user
- @param {string} user.name - user's name
- @param {string} user.lastName - user's lastName
- @param {string} user.email - user's email
- @param {string} user.password - user's password

```sh
registerUser(user)
```

- @param {string} userId - user's id

```sh
getIsUserPro(userId)
```

```sh
getUpdatedUser()
```

- @param {string} user email

```sh
forgotPasswordRequest({email})
```

- @param {string} newPassword
- @param {string} passwordResetToken

```sh
resetPassword({newPassword, passwordResetToken})
```

### API categories

- @param {string} iconSize - one of '48' or '60' icon (simple: '48' or detailed: '60')
- @param {string} iconStyle - one of 'line' or 'solid' ('line' by default)
- @param {boolean} all - if all === true you can not to pass iconSize and iconStyle. It returns all categories

```sh
getCategories({all: true, iconSize: '48', iconStyle: 'solid'})
```

### API icons

- @param {string} [currentPage] optional - for pagination
- @param {string} [pageSize] optional - for pagination
- @param {string} [categoryId] optional - for filtering by category
- @param {string} [searchQuery] optional - return icons wich tags are matches with search query (full match goes first then partly matches)
- @param {string} [iconSize] optional - see below at API categories (server return '48px' by default)
- @param {string} [iconStyle] optional - see below at API categories (server return 'line' by default)
- @param {string} [isFree] optional - one of: string 'true' or empty string (TODO: yes, it should be fixed, use boolean)
- @param {string} [withTags] optional - one of: string 'withTags' or empty string (TODO: yes, it should be fixed, use boolean)

```sh
getIcons({
  currentPage: "",
  pageSize: "",
  iconSize: "",
  iconStyle: "",
  categoryId: "",
  searchQuery: "",
  isFree: "",
  withTags
})
```

- @param {string} iconId - icon id
- @param {string} [iconStyle] optional - see below at API categories (server return 'line' by default)
- @param {string} [withTags] optional - one of: string 'withTags' or empty string (TODO: yes, it should be fixed, use boolean)

```sh
getIcon({
  iconId,
  iconStyle,
  withTags
  })
```

- @param {number} [categorySequenceNumber] optional - sequence category number (1 by default) = offset
- @param {number} [categoriesAmount] optional - categories amount with icons (1 by default) = limit
- @param {string} [iconStyle] optional - line or solid
- @param {string} [iconSize] optional - '48px' or '60px ('60px' by default)
- @param {string} [isFree] optional - one of: string 'true' or empty string (TODO: yes, it should be fixed, use boolean)

```sh
getIconsByCategory({
  categorySequenceNumber: 1,
  categoriesAmount: 1,
  iconStyle: "",
  iconSize: "",
  isFree: ""
})
```

### API downloads

Download icon file:

- @param {string} iconId - icon id
- @param {string} [userId] optional - user id
- @param {string} [format] optional - one of 'svg' or 'png'
- @param {string} [pngSize] optional - png icon size: '96' by default, for svg format it will be ignored
- @param {string} [iconStyle] - 'line' or 'solid'

```sh
getIconFile(
  iconId,
  userId = "",
  format = "png",
  pngSize,
  iconStyle
  )
```

Download icon files:

- @param {array} iconsList - array of icons ids and icons styles
- @param {string} [userId] optional - user id
- @param {string} [format] optional - one of 'svg' or 'png'
- @param {string} [pngSize] optional - png icon size, for svg format it will be ignored

```
iconsList: [
  {_id: "5d46a151b0135c001678d811", style: "solid"},
  {_id: "5d46a151b0135c001678d855", style: "line"}
]
```

```sh
getIconsFiles(
  iconsList,
  userId = "",
  format = "png",
  pngSize
  )
```

Download icon files by category:
FORMAT - Only SVG

- @param {string} [categoryId] optional - category id
- @param {string} [userId] optional - user id
- @param {string} [iconStyle] - 'line' or 'solid'
- @param {string} [iconSize] optional - '48px' or '60px ('60px' by default)

```sh
getIconsFilesByCategory(
  categoryId,
  userId = "",
  iconStyle = "line",
  iconSize = '60'
  )
```

### API downloadsactions

Get user's download history:

- @param {string} id - user id

```sh
trackDownloadIcon({userId})
```

---

## HTTP client: axios

axios is used just in one plase: httpService.js
then use httpService

---

## User notifications at browser: react-toastify

### Adding to page:

```sh
import {ToastContainer} from 'react-toastify';
export const MyComponent = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  )
}
```

### Usage:

```sh
import {toast} from 'react-toastify';
toast.error('An unexpected error occured.');
```

Run this command at root folder of the project.

---
