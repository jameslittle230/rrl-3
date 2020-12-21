import Navigation from "../components/navigation";
import Header from "../components/header";
import Spacer from "../components/spacer";

export default (props) => (
  <div className="container mx-auto p-4 border-t-8 border-blue-500 border-solid">
    <Header />
    <Spacer border size="large" />
    {props.belowHeader}
    <div className="flex justify-between">
      <Navigation />
      <div className="max-w-prose">{props.children}</div>
    </div>
  </div>
);
