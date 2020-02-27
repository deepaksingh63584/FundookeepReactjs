import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7lyTkoqeU4zvmpWWnf02kQxnX54HMzDI",
    authDomain: "fondoo-app.firebaseapp.com",
    databaseURL: "https://fondoo-app.firebaseio.com",
    projectId: "fondoo-app",
    storageBucket: "fondoo-app.appspot.com",
    messagingSenderId: "138049377828",
    appId: "1:138049377828:web:481b21569855773323eab1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
