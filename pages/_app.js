import Head from "next/head";
import "../styles/global.scss";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>EasterBlanket Development</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
