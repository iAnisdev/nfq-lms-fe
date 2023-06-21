import "@/styles/globals.css";
import { store } from "@/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import { SessionProvider  } from "next-auth/react"
import RootLayout from "@/layouts/RootLayout"


function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <SessionProvider>
      <RootLayout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </RootLayout>
    </SessionProvider>
  );
}

export default MyApp;
