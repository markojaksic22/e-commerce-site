import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFxYZwz4qg0d2MI2m_HCWbgBUsMO3MfPg",
  authDomain: "e-commerce-1ffb3.firebaseapp.com",
  projectId: "e-commerce-1ffb3",
  storageBucket: "e-commerce-1ffb3.appspot.com",
  messagingSenderId: "860384157317",
  appId: "1:860384157317:web:7f59cb81b9a6aec2ae13ec"
};


const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;