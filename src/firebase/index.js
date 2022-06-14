import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQnly8_RZyvULMGbS8odpeM43M5SOaTh4",
    authDomain: "labeli-db.firebaseapp.com",
    projectId: "labeli-db",
    storageBucket: "labeli-db.appspot.com",
    messagingSenderId: "712083317036",
    appId: "1:712083317036:web:f32ae71aaa447c18dd8c89"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}