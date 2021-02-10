import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB14pcZgqKqZP5uoYmpZyEcP1ravayJxhU',
  authDomain: 'subscription-fada1.firebaseapp.com',
  databaseURL: 'https://subscription-fada1.firebaseio.com',
  projectId: 'subscription-fada1',
  storageBucket: 'subscription-fada1.appspot.co',
  messagingSenderId: '269381306593',
  appId: '1:269381306593:web:f8651eec3c3ab761f88fa0'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
