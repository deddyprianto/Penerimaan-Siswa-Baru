import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import store from "../app/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Layout from "../components/Layout/Layout";
import * as GiveProvider from "next-auth/client";
import LayoutDashboard from "../components/Layout/LayoutDashboard";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  console.log("RENDER ULANG FILE _APP");
  // NAMA EKSTENSION GOOGLE CHROME GRIDMAN -CSS GRID INSPECTOR

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GiveProvider.Provider session={pageProps.session}>
          {!pageProps.session ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <LayoutDashboard dataUser={pageProps.session}>
              <Component {...pageProps} />
            </LayoutDashboard>
          )}
        </GiveProvider.Provider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
