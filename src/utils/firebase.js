import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDNYaKmy4RDoBWWrF56cP2vyBsKsdLLfsc",
  authDomain: "gusgus-project.firebaseapp.com",
  projectId: "gusgus-project",
  storageBucket: "gusgus-project.appspot.com",
  messagingSenderId: "715385701552",
  appId: "1:715385701552:web:1746c7c54cf774a7d52775",
  measurementId: "G-3MBP2J073Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;