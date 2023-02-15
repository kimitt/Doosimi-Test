import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAi3vJiDzxNuCrtpLjnRQ6BB97Aym1jrf0',
  authDomain: 'doosimi-test.firebaseapp.com',
  projectId: 'doosimi-test',
  storageBucket: 'doosimi-test.appspot.com',
  messagingSenderId: '36907283982',
  appId: '1:36907283982:web:a9b931f2ad1663c502ee5f',
  measurementId: 'G-WZX2PCV1RQ',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const dbFirestore = getFirestore();
