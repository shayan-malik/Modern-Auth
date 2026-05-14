import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js';
import { getAuth , createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';


const firebaseConfig = {
    apiKey: "AIzaSyCunwE9S14-evrammN4pFfhto1KA4y39g4",
    authDomain: "first-project-4b086.firebaseapp.com",
    projectId: "first-project-4b086",
    storageBucket: "first-project-4b086.firebasestorage.app",
    messagingSenderId: "856562149494",
    appId: "1:856562149494:web:43fbb0334686799bab9757",
    measurementId: "G-LX4Y72P1M6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


function register() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Successfully Signup")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
Sign
}

let registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", alert("ello"));
