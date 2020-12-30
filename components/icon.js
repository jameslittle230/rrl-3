import MappinCircleFill from "./icons/mappin.circle.fill.svg";
import PhoneFill from "./icons/phone.fill.svg";
import ArrowUpRightSquare from "./icons/arrow.up.right.square.svg";
import DocText from "./icons/doc.text.svg";

export default (props) => {
  const icons = {
    "mappin.circle.fill": <MappinCircleFill />,
    "phone.fill": <PhoneFill />,
    "arrow.up.right.square": <ArrowUpRightSquare />,
    "doc.text": <DocText />,
  };

  if (!icons[props.icon]) {
    throw new Error(`Cannot find icon \`${props.icon}\`!`);
  }

  return (
    <span
      className={`inline relative bottom-0.5 font-black ${props.className}`}
    >
      {icons[props.icon]}
    </span>
  );
};
