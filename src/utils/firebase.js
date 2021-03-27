import firebase from 'firebase/app';
import 'firebase/storage';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const storageRef = storage.ref();

export const putFileToNovelCategory = async (fileName, data, metadata) => {
  metadata = metadata || {};
  const filePath = `novel_category/${fileName}`;
  const fileRef = storageRef.child(filePath);

  return new Promise((resolve, reject) => {
    console.log({ filePath });
    fileRef
      .put(data, metadata)
      .then((task) => {
        console.log({ task });
        return fileRef.getDownloadURL();
      })
      .then((url) => {
        console.log({ url });
        resolve(url);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
