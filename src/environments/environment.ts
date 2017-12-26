// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCafMALq-Kgygo5zwE7nQ9xw59iGL9Vip4",
    authDomain: "fs1prod-f73a8.firebaseapp.com",
    databaseURL: "https://fs1prod-f73a8.firebaseio.com",
    projectId: "fs1prod-f73a8",
    storageBucket: "fs1prod-f73a8.appspot.com",
    messagingSenderId: "12640729467"
  },
  firebasecard: {
    apiKey: "AIzaSyAULK8UgDxUfvRKYiu04XPPjEC-B0a3yp4",
    authDomain: "cardproj-23444.firebaseapp.com",
    databaseURL: "https://cardproj-23444.firebaseio.com",
    projectId: "cardproj-23444",
    storageBucket: "cardproj-23444.appspot.com",
    messagingSenderId: "735939378348"
  }
};

