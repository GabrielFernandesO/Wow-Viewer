import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCs42HTYkLTHga3b_thpZ5RargL07p0Q-k",
  authDomain: "wow-viewer.firebaseapp.com",
  projectId: "wow-viewer",
  storageBucket: "wow-viewer.appspot.com",
  messagingSenderId: "781344371585",
  appId: "1:781344371585:web:d4f96cb1dd14f312b22e80"
};



initializeApp(firebaseConfig);

const auth = getAuth();

const app = createApp(App)

app.use(router)

app.mount('#app')

setPersistence(auth, browserLocalPersistence)