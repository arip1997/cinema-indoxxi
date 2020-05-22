import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {

        apiKey: "AIzaSyDErbSFVYfTjh-GasHqT8W8mZuTMMWHmHc",
        authDomain: "uas-pbf-arif.firebaseapp.com",
        databaseURL: "https://uas-pbf-arif.firebaseio.com",
        projectId: "uas-pbf-arif",
        storageBucket: "uas-pbf-arif.appspot.com",
        messagingSenderId: "132037000411",
        appId: "1:132037000411:web:26a9e1d4fd1c8c890a20fe",
        measurementId: "G-RDMPPYL81S"
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