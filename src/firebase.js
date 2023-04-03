import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'tiktok-ui-48cfe.firebaseapp.com',
  databaseURL: 'https://tiktok-ui-48cfe-default-rtdb.firebaseio.com',
  projectId: 'tiktok-ui-48cfe',
  storageBucket: 'tiktok-ui-48cfe.appspot.com',
  messagingSenderId: '57525405602',
  appId: '1:57525405602:web:ab95ee1839bad6606ed4fb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
