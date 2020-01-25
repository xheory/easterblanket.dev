import Head from "next/head";
import Header from "../components/header";
import "../styles/global.scss";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>EasterBlanket Development</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};
