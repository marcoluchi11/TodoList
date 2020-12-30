import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCQ6VFN9H-O0mpJCLZzCq70IfoWlmjEFkI",
  authDomain: "crealistatareas.firebaseapp.com",
  projectId: "crealistatareas",
  storageBucket: "crealistatareas.appspot.com",
  messagingSenderId: "769093588956",
  appId: "1:769093588956:web:6d2cd4494566f0a4dea119",
  measurementId: "G-E4DLFEM1NE",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
