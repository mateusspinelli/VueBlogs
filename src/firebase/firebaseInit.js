import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEWURTzt4ON95qoyXOm0AOQ7IN-HkK19Q",
  authDomain: "vue-blog-mateusspinelli.firebaseapp.com",
  projectId: "vue-blog-mateusspinelli",
  storageBucket: "vue-blog-mateusspinelli.appspot.com",
  messagingSenderId: "717323585957",
  appId: "1:717323585957:web:6c6f4045919cc1988cc04c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();