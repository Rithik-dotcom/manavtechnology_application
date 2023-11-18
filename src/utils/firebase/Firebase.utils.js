import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJxvIn8CCTNHOEk9eJ_N3zYVJ81Fs4jbI",
    authDomain: "mt-database-6ca13.firebaseapp.com",
    projectId: "mt-database-6ca13",
    storageBucket: "mt-database-6ca13.appspot.com",
    messagingSenderId: "405589833193",
    appId: "1:405589833193:web:88c4e41fd7678f41108778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

