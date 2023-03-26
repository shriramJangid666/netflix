import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6qMZNONZLHCY8ZiNhNTMB13ByySy9x24",
  authDomain: "netflix-b3fcc.firebaseapp.com",
  projectId: "netflix-b3fcc",
  storageBucket: "netflix-b3fcc.appspot.com",
  messagingSenderId: "1087206254177",
  appId: "1:1087206254177:web:a4c2cddc820d97dfeeec20",
  measurementId: "G-8J2H7ENCDN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);