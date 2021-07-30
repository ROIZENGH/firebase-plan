import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAJN-kfYaCSz1EQTwR6L_wKC8qUsXH1_t0",
authDomain: "fir-plan-a1c37.firebaseapp.com",
projectId: "fir-plan-a1c37",
storageBucket: "fir-plan-a1c37.appspot.com",
messagingSenderId: "199972034093",
appId: "1:199972034093:web:4ebffaa124eb1e765a0aa4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true}); 

export default firebase;