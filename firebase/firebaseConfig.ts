// import { initializeApp, getApp } from "firebase/app";
// import { initializeAuth, getAuth } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// // @ts-ignore
// import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyA_MYqh0qQ5IA6Xx5HrcOH92otvA3ej5zs",
//   authDomain: "sotay-74bbe.firebaseapp.com",
//   databaseURL: "https://sotay-74bbe-default-rtdb.firebaseio.com",
//   projectId: "sotay-74bbe",
//   storageBucket: "sotay-74bbe.appspot.com",
//   messagingSenderId: "477511026795",
//   appId: "1:477511026795:web:7d18d04f2ccb090fb6092e",
//   measurementId: "G-CTNBCBSS3S",
// };

// // // Initialize Firebase
// // const firebase  = initializeApp(firebaseConfig);
// // // const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
// initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// // // const db = getDatabase(app);

// export { app };

// // export default firebase;

import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
//@ts-ignore
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_MYqh0qQ5IA6Xx5HrcOH92otvA3ej5zs",
  authDomain: "sotay-74bbe.firebaseapp.com",
  databaseURL: "https://sotay-74bbe-default-rtdb.firebaseio.com",
  projectId: "sotay-74bbe",
  storageBucket: "sotay-74bbe.appspot.com",
  messagingSenderId: "477511026795",
  appId: "1:477511026795:web:7d18d04f2ccb090fb6092e",
  measurementId: "G-3YY63E540F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, db, auth };
