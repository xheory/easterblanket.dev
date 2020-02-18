import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faGlobe,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/global.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faGithub, faPhoneAlt, faEnvelope, faGlobe);

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
