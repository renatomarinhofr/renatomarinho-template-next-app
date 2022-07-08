import type { AppProps } from "next/app";

import { UserProvider } from "@services/user/provider";

import { GlobalStyles } from "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
