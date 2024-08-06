import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy31ejH-SfiZdRKvCvkI8XEMixe745HmM",
  authDomain: "tarefas-ce630.firebaseapp.com",
  projectId: "tarefas-ce630",
  storageBucket: "tarefas-ce630.appspot.com",
  messagingSenderId: "210275675284",
  appId: "1:210275675284:web:309d52e746ff3497e49881",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
