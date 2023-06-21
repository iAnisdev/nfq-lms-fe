import "@/styles/globals.css";
import { store } from "@/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";

const RootLayout = dynamic(()=> import("@/layouts/RootLayout") , {
  ssr: false
})

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <RootLayout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </RootLayout>
  );
}

export default MyApp;
