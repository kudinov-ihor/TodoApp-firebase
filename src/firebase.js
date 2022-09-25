import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARyC5QLiZqtZ1-x3hg92QNzRN5EVXzad8",
    authDomain: "todoapp-168f8.firebaseapp.com",
    projectId: "todoapp-168f8",
    storageBucket: "todoapp-168f8.appspot.com",
    messagingSenderId: "977528511755",
    appId: "1:977528511755:web:e2c7fd996b2056c6c2560e"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};