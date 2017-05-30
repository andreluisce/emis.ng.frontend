// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDpDRlw_9GhHwQIlsnTZygrfuE-R57y0dc",
    authDomain: "sgi-emis.firebaseapp.com",
    databaseURL: "https://sgi-emis.firebaseio.com",
    projectId: "sgi-emis",
    storageBucket: "sgi-emis.appspot.com",
    messagingSenderId: "519931161091"
    // apiKey: "AIzaSyBIX3Y0l9x7oxMPiuCn3zN0089kEdt6OFY",
    // authDomain: "sgi-mcc.firebaseapp.com",
    // databaseURL: "https://sgi-mcc.firebaseio.com",
    // projectId: "sgi-mcc",
    // storageBucket: "sgi-mcc.appspot.com",
    // messagingSenderId: "685837943576"
  }
};