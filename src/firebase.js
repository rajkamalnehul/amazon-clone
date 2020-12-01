/** @format */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMGCsK4LbPA5JExecbPQIcVKZIAoeHurE",
  authDomain: "clone-92c3c.firebaseapp.com",
  databaseURL: "https://clone-92c3c.firebaseio.com",
  projectId: "clone-92c3c",
  storageBucket: "clone-92c3c.appspot.com",
  messagingSenderId: "42769785632",
  appId: "1:42769785632:web:ae02f44f332d14278ded45",
  measurementId: "G-3CC6JVG1EP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
