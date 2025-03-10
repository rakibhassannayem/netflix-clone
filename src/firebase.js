import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoS44NQK_dwKq2ITOH3j4jZ4z3veU2458",
  authDomain: "netflix-clone-e19ea.firebaseapp.com",
  projectId: "netflix-clone-e19ea",
  storageBucket: "netflix-clone-e19ea.firebasestorage.app",
  messagingSenderId: "49381571346",
  appId: "1:49381571346:web:9882b0a4bc68003de891cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout}