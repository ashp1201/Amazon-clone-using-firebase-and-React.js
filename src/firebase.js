// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';
import { getAuth} from 'firebase/auth';
// import {getFireStore} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbEmF0j1MvbH7uA1eqUTjpPJSzKt-T17Y",
  authDomain: "clone-6009f.firebaseapp.com",
  databaseURL: "https://clone-6009f-default-rtdb.firebaseio.com",
  projectId: "clone-6009f",
  storageBucket: "clone-6009f.appspot.com",
  messagingSenderId: "785510510881",
  appId: "1:785510510881:web:4139a223855edbff920e60",
  measurementId: "G-67TKV3NPH9"
};
const firebaseApp = initializeApp(firebaseConfig);

// const db = getFireStore(firebaseApp);
const db=getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth };