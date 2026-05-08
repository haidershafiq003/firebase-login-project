import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc
}
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBcR06BU_rtdYOzaA3wlSJ84IuaFng61UI",

    authDomain: "login-portal-bd5d4.firebaseapp.com",

    projectId: "login-portal-bd5d4",

    storageBucket: "login-portal-bd5d4.firebasestorage.app",

    messagingSenderId: "430538104978",

    appId: "1:430538104978:web:0cb97c52c55e89f644064b"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

window.signup = async function () {

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        const user = userCredential.user;

        await setDoc(
            doc(db, "users", user.uid),
            {
                username,
                email
            }
        );

        alert("Signup Successful");

        window.location.href = "/";

    } catch (error) {

        alert(error.message);

    }

}

window.login = async function () {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Login Successful");

        window.location.href = "/portal.html";

    } catch (error) {

        alert(error.message);

    }

}