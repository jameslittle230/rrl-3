import MappinCircleFill from "./icons/mappin.circle.fill";
import PhoneFill from "./icons/phone.fill";
import ArrowUpRightSquare from "./icons/arrow.up.right.square";
import DocText from "./icons/doc.text";
import LogoGoogle from "./icons/logo.google";
import LogoApple from "./icons/logo.apple";
import Video from "./icons/video";
import EllipsisRectangle from "./icons/ellipsis.rectangle";
import XmarkCircleFill from "./icons/xmark.circle.fill";
import FaxMachine from "./icons/faxmachine";

const Icon = (props) => {
  const icons = {
    "mappin.circle.fill": <MappinCircleFill />,
    "phone.fill": <PhoneFill />,
    "arrow.up.right.square": <ArrowUpRightSquare />,
    "doc.text": <DocText />,
    "logo.google": <LogoGoogle />,
    "logo.apple": <LogoApple />,
    video: <Video />,
    "ellipsis.rectangle": <EllipsisRectangle />,
    "xmark.circle.fill": <XmarkCircleFill />,
    faxmachine: <FaxMachine />,
  };

  if (!icons[props.icon]) {
    throw new Error(`Cannot find icon \`${props.icon}\`!`);
  }

  return (
    <span className={`inline relative -top-0.5 ${props.className}`}>
      {icons[props.icon]}
    </span>
  );
};

export default Icon;
