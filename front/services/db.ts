import { auth, db } from "@/constants/db";
import { RegistrationType } from "@/services";
import { User } from "@/types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
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
};

export const LogoutFirebase = async () => {
  signOut(auth);
  // signOut(auth).then(() => router.push("/"))
};
// export const LoginFirebase = async (
//   { email, password }: JoinState,
//   onError: (error: ErrorUser) => void,
//   onSucces: (undefined: undefined) => void
// ): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     onSucces(undefined);
//   } catch (error) {
//     console.log(error);

//     onError(error as ErrorUser);
//   }
// };
