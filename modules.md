## Start
- npx create-react-app movie_app_2021
- cd movie_app_2021
- npm start

## Downloaded modules
- npm i prop-types
- npm i axios
- npm i react-router-dom

## Deploy to github.io
- npm i gh-pages
- Make changes to `package.json` file
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```
```
"homepage": "https://hgoolee.github.io/movie_app_2021"
```
- npm run deploy
