import { useState } from "react";
import Navigation from "../components/navigation";
import MobileNavigation from "../components/mobileNavigation";
import Header from "../components/header";
import Spacer from "../components/spacer";
import Footer from "../components/footer";
import Head from "next/head";

const Container = (props) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{props.title ? `${props.title} - ` : ""}Drs. Roth, Rotter, and Laster</title>
      </Head>

      {mobileNavVisible ? (
        <MobileNavigation setMobileNavVisible={setMobileNavVisible} />
      ) : null}

      <div className="border-t-8 border-blue-500 border-solid"></div>
      <div className="container max-w-screen-lg mx-auto p-4">
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