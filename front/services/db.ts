import { auth, db } from "@/constants/db";
import { User } from "@/types";
import { RegistrationType } from "@/types/security.types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const JoinFirebase = async (body: RegistrationType): Promise<void> => {
  let creds;
  creds = await createUserWithEmailAndPassword(auth, body.email, body.password);

  if (!creds || !creds.user.email || !creds.user.uid)
    throw new Error("An error Has occured during user creation");

  const firebaseUserDocument: User = {
    uid: creds.user.uid,
    email: body.email,
    firstname: body.firstname,
    dateOfBirth: body.dateOfBirth,
    lastname: body.lastname,
    profession: body.profession,
    children: body.children,
    role: body.role,
    sport: body.sport,
  };

  await setDoc(
    doc(db, "users", firebaseUserDocument.uid),
    firebaseUserDocument
  );
  console.log("user created");
  
};

export const LogoutFirebase = async () => {
  signOut(auth);
};
export const LoginFirebase = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> => {
  await signInWithEmailAndPassword(auth, email, password);
};
