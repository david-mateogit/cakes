import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
};

const firebaseApp = firebase.initializeApp(config);

export { firebaseApp };

export default firebase;
