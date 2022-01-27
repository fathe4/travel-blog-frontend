import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseInitialization from "../Firebase/firebase.init";



FirebaseInitialization()

const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name };
                setUser(newUser);
                console.log('new register done');
                addUserToDB(email, name, 'POST')
                setError('')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }

    // CHECK ADMIN 
    useEffect(() => {
        // fetch(`https://polar-savannah-40370.herokuapp.com/users/admin@admin.com`)
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => { setAdmin(data.admin) })

    }, [user.email])

    // SIGN IN WITH USER AND EMAIL
    const signIn = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // setUser(user)
                // addUserToDB(user.email, user.displayName,);
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                addUserToDB(user.email, user.displayName, 'POST');
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const checkUser = (email) => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => { setAdmin(data.admin) })
    }
    // OBSERVE A USER
    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                // const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
            return () => unsubscribed;

        });

    }, [auth])

    // LOGOUT
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    // ADD USER TO DATABASE
    const addUserToDB = (email, name, method) => {

        const user = { name, email, roll: 'user' }

        fetch('http://localhost:5000/addUser', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }


    return {
        RegisterUser,
        logout,
        signIn,
        isLoading,
        setIsLoading,
        user,
        error,
        admin,
        signInWithGoogle


    }
};

export default UseFirebase;