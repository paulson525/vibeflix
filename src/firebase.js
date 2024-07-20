import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyCSAqGFzT0wWpN-ESZ1I_CGqaIf6Wyxooc",
  authDomain: "vibeflix-76a3b.firebaseapp.com",
  projectId: "vibeflix-76a3b",
  storageBucket: "vibeflix-76a3b.appspot.com",
  messagingSenderId: "847626576702",
  appId: "1:847626576702:web:880cec69f307d506e5826f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const signin = async (email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const signout = () => {
    signOut(auth)
}

export {auth, db, signin, signup, signout}