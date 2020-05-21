import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAoDptyuMwiZaAvcO7WgD4kRQZZ-qGLpys",
  authDomain: "uas-pbf-marketplace.firebaseapp.com",
  databaseURL: "https://uas-pbf-marketplace.firebaseio.com",
  projectId: "uas-pbf-marketplace",
  storageBucket: "uas-pbf-marketplace.appspot.com",
  messagingSenderId: "1045212472609",
  appId: "1:1045212472609:web:68d6282f54980e62b54a60",
  measurementId: "G-77WL8XL87L"
};
    class Firebase {
        constructor(){
            app.initializeApp(config);

            this.auth = app.auth();
            this.db = app.database();
        }

//authentication

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

//realtime

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

};

export default Firebase;