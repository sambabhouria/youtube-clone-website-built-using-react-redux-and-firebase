import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyDl20gKEOq0Yw-EFvd0AHbWKXN1nvcotTs",
//     authDomain: "yt-clone-ashu.firebaseapp.com",
//     projectId: "yt-clone-ashu",
//     storageBucket: "yt-clone-ashu.appspot.com",
//     messagingSenderId: "178146130104",
//     appId: "1:178146130104:web:cec6098e0f25e3d6db5c4d"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyDPdtiQPS5sSZG5iAkyShrqWLsI_n-AA1o",
    authDomain: "microblog-a23b4.firebaseapp.com",
    databaseURL: "https://microblog-a23b4-default-rtdb.firebaseio.com",
    projectId: "microblog-a23b4",
    storageBucket: "microblog-a23b4.appspot.com",
    messagingSenderId: "508181336911",
    appId: "1:508181336911:web:ceb546b282650cb9832b3a",
    measurementId: "G-E1NL6LWQG1"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth()
