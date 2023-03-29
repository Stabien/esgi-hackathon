import { auth, db } from "@/constants/db";
import { store } from "@/redux/store";
import { updateUser } from "@/redux/user/user.actions";
import { defaultUser } from "@/redux/user/user.slice";
import "@/styles/globals.scss";
import { User } from "@/types";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Provider, useDispatch } from "react-redux";

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
      <Toaster position="bottom-right" />
    </Provider>
  );
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let unSubSnapchot: any;
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        const visitorUser: User = defaultUser;
        dispatch(updateUser(visitorUser));
        return;
      }

      if (!user.uid) return;
      unSubSnapchot = onSnapshot(doc(db, "users", user.uid), (doc) => {
        if (!doc.exists()) return;
        const reduxUser = doc.data();
        dispatch(updateUser(reduxUser as User));
      });
      // toast(`Vous etes connecté avec ${user.email}`);
    });

    return () => {
      unsub();
      if (unSubSnapchot !== undefined) {
        unSubSnapchot();
      }
    };
  }, []);
  return <Component {...pageProps} />;
};
