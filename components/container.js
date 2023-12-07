import { useState } from "react";
import Navigation, {currentPageTitle} from "../components/navigation";
import MobileNavigation from "../components/mobileNavigation";
import Header from "../components/header";
import Spacer from "../components/spacer";
import Footer from "../components/footer";
import Head from "next/head";

const Container = (props) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const join = (array) => {
    return array.join(" - ");
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{join([currentPageTitle(), "Drs. Roth, Rotter, and Laster"])}</title>

        {/* http://jil.im/favicon2021 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>

      {mobileNavVisible ? (
        <MobileNavigation setMobileNavVisible={setMobileNavVisible} />
      ) : null}

      <div className="border-t-8 border-blue-400 border-solid"></div>
      <div className="container max-w-screen-lg mx-auto p-4 font-sans">
        <Header setMobileNavVisible={setMobileNavVisible} />
        <Spacer border size="large" />
        {props.belowHeader}
        <div className="md:flex md:justify-between md:space-x-6">
          <div className="hidden md:block flex-shrink-0 mr-4">
            <Navigation />
          </div>
          <div className="w-full" id="stork-content">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Container;
