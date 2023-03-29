import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";
const apiKey = process.env.NEXT_PUBLIC_FBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FBASE_PROJECT_ID;
const messagingSenderId = process.env.NEXT_PUBLIC_FBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId,
  appId,
};

// ! Error if exporting app with a const (maybe due to creation of reference of app and not the real app)
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export const functions = getFunctions(app, "europe-west3");
