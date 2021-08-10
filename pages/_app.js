import "../styles/style.scss";
import "../styles/model.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-modal/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="MjExNzMwMDUtODJiZC00OWEzLWI5ZjEtMjhhMzA1ZTdkZmEyNjM3NjM4MjgxNjkzMzk3NDQx"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
