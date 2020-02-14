import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import "../styles/global.scss";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>EasterBlanket Development</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};
