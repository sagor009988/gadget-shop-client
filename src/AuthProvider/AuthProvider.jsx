import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase-Config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';
import { data } from 'react-router-dom';

export const AuthContext = createContext(null);
const auth = getAuth(app);

// Move GoogleProvider outside the component to avoid re-creation
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth)
    };

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                axios.post(`http://localhost:5000/authentication`, { email: currentUser.email }).then(data => {
                    if (data.data) {
                        localStorage.setItem("access-token", data?.data?.token)
                        setLoading(false);
                    }
                })
            } else {
                localStorage.removeItem("access-token")
                setLoading(false)
            }

        });

        return unsubscribe; // Correct cleanup
    }, []);



    const authInfo = {
        user,
        loading,
        CreateUser,
        login,
        logOut,
        googleLogin
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
