  import * as firebase from "firebase/app";
  import "firebase/storage";
  import "firebase/firestore";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNSvuJtWPNAKM3_IitaO97TPM4moDjoBA",
    authDomain: "firegram-aec9a.firebaseapp.com",
    databaseURL: "https://firegram-aec9a.firebaseio.com",
    projectId: "firegram-aec9a",
    storageBucket: "firegram-aec9a.appspot.com",
    messagingSenderId: "1020881826184",
    appId: "1:1020881826184:web:17ee32c3a56f210ea30a3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore(); 

  export { projectFirestore, projectStorage };
