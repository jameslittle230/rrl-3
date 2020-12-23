import Navigation from "../components/navigation";
import Header from "../components/header";
import Spacer from "../components/spacer";
import Footer from "../components/footer";
import Head from "next/head";

export default (props) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="border-t-8 border-blue-500 border-solid"></div>
    <div className="container max-w-screen-lg mx-auto p-4">
      <Header />
      <Spacer border size="large" />
      {props.belowHeader}
      <div className="md:flex md:justify-between md:space-x-6">
        <div className="hidden md:block flex-shrink-0 mr-4">
          <Navigation />
        </div>
        <div className="">{props.children}</div>
      </div>
    </div>
    <Footer />
  </>
);
