import { auth, db } from "@/constants/db";
import { defaultUser } from "@/redux/user/user.slice";
import { User } from "@/types";
import { RegistrationType } from "@/types/security.types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const register = async (body: RegistrationType): Promise<void> => {
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

export const logout = async () => {
  signOut(auth);
};
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User | void> => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const checkUser = (cb: Function) => {
  let unSubSnapchot: Function;
  const unsub = onAuthStateChanged(auth, async (user) => {
    if (!user) {
      const visitorUser: User = defaultUser;
      cb(visitorUser);
      return;
    }

    if (!user.uid) return;
    unSubSnapchot = onSnapshot(doc(db, "users", user.uid), (doc) => {
      if (!doc.exists()) return;
      const reduxUser = doc.data();
      cb(reduxUser as User);
    });
    // toast(`Vous etes connecté avec ${user.email}`);
  });

  return () => {
    unsub();
    if (unSubSnapchot) {
      unSubSnapchot();
    }
  };
};
