import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: process.env.APP_KEY,
//   authDomain: "netflix-151df.firebaseapp.com",
//   projectId: "netflix-151df",
//   storageBucket: "netflix-151df.appspot.com",
//   messagingSenderId: "316700975498",
//   appId: "1:316700975498:web:15063159b205c1a349a873",
//   measurementId: "G-2ZGE63ES9F",
// };


const firebaseConfig = {
  apiKey: "AIzaSyAzMAMv6_3_j8mhngwCuYo5oFdCSzHWbXI",
  authDomain: "adrenalinetv-6923e.firebaseapp.com",
  projectId: "adrenalinetv-6923e",
  storageBucket: "adrenalinetv-6923e.appspot.com",
  messagingSenderId: "468924038195",
  appId: "1:468924038195:web:4fa731719c8e76dadb3746"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
