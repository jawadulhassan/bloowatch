import Head from "next/head";

import Main from "../components/views";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bloowatch</title>
        <meta name="description" content="Bloowatch" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
