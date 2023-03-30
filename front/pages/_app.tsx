import { store } from "@/redux/store";
import { updateUser } from "@/redux/user/user.actions";
import { Security } from "@/services";
import "@/styles/globals.scss";
import { User } from "@/types";
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
    const unsub = Security.checkUser((user: User) => {
      dispatch(updateUser(user));
    });

    return () => {
      if (unsub) {
        unsub();
      }
    };
  }, []);
  return <Component {...pageProps} />;
};
