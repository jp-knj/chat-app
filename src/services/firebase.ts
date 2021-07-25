import 'firebase/auth';
import 'firebase/database';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDlrCEQtlZLOItsB1A9yd6rztFjNmIaNXQ',
  authDomain: 'chat-app-432a4.firebaseapp.com',
  databaseURL: 'https://chat-app-432a4-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-app-432a4',
  storageBucket: 'chat-app-432a4.appspot.com',
  messagingSenderId: '573633055694',
  appId: '1:573633055694:web:43f249e691317763df399f',
  measurementId: 'G-TY4GK95KB8',
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
