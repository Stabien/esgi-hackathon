import { store } from "@/redux/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
      <Toaster position="bottom-right" />
    </Provider>
  );
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
