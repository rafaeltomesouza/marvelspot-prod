# Marvel-Spot Project

The Marvel-Spot project MVP allows the user post comments and vote in the commics that he/she reads. So, the user can vote up or down based on his opinion anytime he/she wishes.

The user can select a commic for more details and create a post defining the category equal ```spoiler``` or ```comment```.

## The project is available on web

The project is available on web published using firebase. You can access in the following address:
https://testmyhome-af24f.firebaseapp.com/.

In the project you can find some keys related to the firebase database and marvel api. You
can find those keys in the configs folder.

To access marvel-spot you need to have an google account and the authentication
will use only the email and the username in the website.

## How to execute the project in your machine using the dev version

You need to follow these instructions:
1. Access the project folter and in the console and type command:
```npm install```. This command will install all the project dependencies;
2. After install all dependencies, type the following command:
```npm start```. This command will initialize the project.

The command prompt of your computer will show the following message:
```bash
Compiled successfully!

You can now view marvelspot in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://<IP of your machine>:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

## How to create a production version

We are using the [Create React App](https://github.com/facebookincubator/create-react-app), so
it is possible build a production version. For that, you can type the following
command: https://testmyhome-af24f.firebaseapp.com/.

1. ```npm install``` - This command will install all the project dependencies;
2. ```npm run build``` - This command will build a production version;

The production version was deployed using the firebase hosting feature. You can access
in the following address: https://testmyhome-af24f.firebaseapp.com/.

## Project structure
```bash
.
├── README.md
├── firebase.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── actions
│   │   └── index.js
│   ├── api
│   │   ├── Connection.js
│   │   ├── index.js
│   │   └── utils.js
│   ├── assets
│   │   ├── fonts
│   │   │   ├── bangers-regular-webfont.eot
│   │   │   ├── bangers-regular-webfont.svg
│   │   │   ├── bangers-regular-webfont.ttf
│   │   │   ├── bangers-regular-webfont.woff
│   │   │   ├── bangers-regular-webfont.woff2
│   │   │   ├── roboto-regular-webfont.eot
│   │   │   ├── roboto-regular-webfont.svg
│   │   │   ├── roboto-regular-webfont.ttf
│   │   │   ├── roboto-regular-webfont.woff
│   │   │   └── roboto-regular-webfont.woff2
│   │   └── images
│   │       ├── captain-america.jpg
│   │       ├── captain-america.png
│   │       ├── header-login.jpg
│   │       └── marvelspot.png
│   ├── common
│   │   ├── Button
│   │   │   ├── Button.js
│   │   │   └── index.js
│   │   ├── Category
│   │   │   ├── components
│   │   │   │   └── Category.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _category.scss
│   │   ├── Comic
│   │   │   ├── Comic.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _comic.scss
│   │   ├── Header
│   │   │   ├── components
│   │   │   │   └── Header.js
│   │   │   ├── container.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _header.scss
│   │   ├── Loading
│   │   │   ├── Loading.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _loading.scss
│   │   ├── Logotype
│   │   │   ├── Logotype.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _logotype.scss
│   │   ├── Navigation
│   │   │   ├── components
│   │   │   │   └── Navigation.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _navigation.scss
│   │   ├── NotFound
│   │   │   ├── components
│   │   │   │   └── NotFound.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _notfound.scss
│   │   ├── Post
│   │   │   ├── Post.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _post.scss
│   │   └── Search
│   │       ├── Search.js
│   │       ├── hooks
│   │       │   └── index.js
│   │       ├── index.js
│   │       └── styles
│   │           └── _search.scss
│   ├── configs
│   │   ├── database.json
│   │   └── key.json
│   ├── constants
│   │   └── index.js
│   ├── index.js
│   ├── pages
│   │   ├── AddPost
│   │   │   ├── components
│   │   │   │   ├── AddPost.js
│   │   │   │   ├── Form.js
│   │   │   │   └── containerForm.js
│   │   │   ├── hooks
│   │   │   │   ├── useAddPost.js
│   │   │   │   └── useForm.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       ├── _addpost.scss
│   │   │       └── _form.scss
│   │   ├── Home
│   │   │   ├── components
│   │   │   │   └── Home.js
│   │   │   ├── hooks
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _home.scss
│   │   ├── Login
│   │   │   ├── components
│   │   │   │   └── Login.js
│   │   │   ├── container.js
│   │   │   ├── index.js
│   │   │   └── styles
│   │   │       └── _login.scss
│   │   └── Threads
│   │       ├── components
│   │       │   └── Threads.js
│   │       ├── hooks
│   │       │   ├── usePosts.js
│   │       │   └── useThreads.js
│   │       ├── index.js
│   │       └── styles
│   │           └── _threads.scss
│   ├── reducers
│   │   └── index.js
│   ├── setupTests.js
│   ├── store.js
│   └── styles
│       ├── core
│       │   └── vars.scss
│       ├── fonts.scss
│       └── global.scss
└── yarn.lock
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
