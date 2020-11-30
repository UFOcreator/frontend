import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD5emGcUTplxoCNAr-pl8C_BocOxs2ZMcM",
    authDomain: "verbeeten-app-9c897.firebaseapp.com",
    databaseURL: "https://verbeeten-app-9c897.firebaseio.com",
    projectId: "verbeeten-app-9c897",
    storageBucket: "verbeeten-app-9c897.appspot.com",
    messagingSenderId: "1092898011091",
    appId: "1:1092898011091:web:a7e961c80c88bf46ebe126"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);


export default fire;