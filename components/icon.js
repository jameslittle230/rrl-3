import MappinCircleFill from "./icons/mappin.circle.fill.svg";
import PhoneFill from "./icons/phone.fill.svg";
import ArrowUpRightSquare from "./icons/arrow.up.right.square.svg";
import DocText from "./icons/doc.text.svg";
import LogoGoogle from "./icons/logo.google.svg";
import LogoApple from "./icons/logo.apple.svg";
import Video from "./icons/video.svg";
import EllipsisRectangle from "./icons/ellipsis.rectangle.svg"
import XmarkCircleFill from "./icons/xmark.circle.fill.svg"
import FaxMachine from "./icons/faxmachine.svg"

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
    "faxmachine": <FaxMachine />
  };

  if (!icons[props.icon]) {
    throw new Error(`Cannot find icon \`${props.icon}\`!`);
  }

  return (
    <span className={`inline relative bottom-0.5 ${props.className}`}>
      {icons[props.icon]}
    </span>
  );
};

export default Icon;
