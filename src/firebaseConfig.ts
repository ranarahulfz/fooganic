import * as firebase from "firebase";
import { toast } from "./toast";

const config = {
  apiKey: "AIzaSyB3KRXHxmqHERWBz7bRKQqC8JOZ2WpvJgg",
  authDomain: "fooganic.firebaseapp.com",
  databaseURL: "https://fooganic.firebaseio.com",
  projectId: "fooganic",
  storageBucket: "fooganic.appspot.com",
  messagingSenderId: "837682246357",
  appId: "1:837682246357:web:6e57d376a4971ea0ab285c",
  measurementId: "G-XXMLJ7B4MN"
};

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
  const email = `${username}@twentykiwi.com`;

  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
      console.log(res)
      return true
  } catch (error) {
    toast(error.message, 4000)
    return false
  }
  // Authenticate with firebase.
  // If present, show dashboard
  // If not, show error
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@twentykiwi.com`;
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
    console.log(res)
    return true
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}
