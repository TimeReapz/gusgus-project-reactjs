import firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/database'; // If using Firebase database

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNYaKmy4RDoBWWrF56cP2vyBsKsdLLfsc",
  authDomain: "gusgus-project.firebaseapp.com",
  databaseURL: "https://gusgus-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gusgus-project",
  storageBucket: "gusgus-project.appspot.com",
  messagingSenderId: "715385701552",
  appId: "1:715385701552:web:1746c7c54cf774a7d52775",
  measurementId: "G-3MBP2J073Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;