import { initializeApp } from 'firebase/app' 
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCh1-LYKc1qbrOOTwyFIXpLrLQn4R5qBeE",
  authDomain: "ecommerce-4127e.firebaseapp.com",
  projectId: "ecommerce-4127e",
  storageBucket: "ecommerce-4127e.appspot.com",
  messagingSenderId: "691848793096",
  appId: "1:691848793096:web:12379529a1fc61ab7415bd"
  };

  const app = initializeApp(firebaseConfig);
 export const  auth = getAuth(app)