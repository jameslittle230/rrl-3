import MappinCircleFill from "./icons/mappin.circle.fill.svg";
import PhoneFill from "./icons/phone.fill.svg";
import ArrowUpRightSquare from "./icons/arrow.up.right.square.svg";
import DocText from "./icons/doc.text.svg";

const Icon = props => {
  const icons = {
    "mappin.circle.fill": <MappinCircleFill />,
    "phone.fill": <PhoneFill />,
    "arrow.up.right.square": <ArrowUpRightSquare />,
    "doc.text": <DocText />,
    "logo.google": <DocText />,
    "logo.apple": <DocText />,
  };

  if (!icons[props.icon]) {
    throw new Error(`Cannot find icon \`${props.icon}\`!`);
  }

  return (
    <span
      className={`inline relative bottom-0.5 ${props.className}`}
    >
      {icons[props.icon]}
    </span>
  );
};

export default Icon;
