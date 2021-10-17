import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/init-firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgetPassword: () => Promise,

});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })
    return () => {
      Unsubscribe()
    }

  }, [])
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function forgetPassword(email) {
    return sendPasswordResetEmail(auth, email, { url: "http://localhost:3000/login" })
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgetPassword
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
