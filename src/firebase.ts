// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import firebaseConfig from "../firebase.config.json"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Google Authentication
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try{

        // Attempt sign-in with popup and collect response
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;

        // If successful, obtain user information
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        // Create new user data if needed
        if (docs.docs.length === 0){

            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                photo: user.photoURL
            });

        }

    } catch (err) {
        console.error(err);
    }
}

const logout = () => {
    signOut(auth);
}

export {
    auth,
    db,
    signInWithGoogle,
    logout
  };