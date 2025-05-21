import { inicializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvE5cjIuuYX8ZDHjOgjz71kLib_o8-KJo",
    authDomain: "",
    projectId: "projeto-mobile-76f4b",
    storageBucket: "",
    app: "",
};

const app = inicializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }