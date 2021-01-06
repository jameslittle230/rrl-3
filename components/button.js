import Link from "next/link";

const Button = (props) => {
  if (!props.type) {
    throw new Error(
      `props.type not defined for a button! Found ${JSON.stringify(props)}`
    );
  }
  const data = {
    red: {
      borderColor: "border-red-600",
      bgGradientFrom: "from-red-200",
      bgGradientTo: "to-red-300",
      hoverGradientFrom: "hover:from-red-100",
      activeGradientFrom: "active:from-red-400",
      textColor: "text-red-900",
    },

    blue: {
      borderColor: "border-blue-500",
      bgGradientFrom: "from-blue-100",
      bgGradientTo: "to-blue-200",
      hoverGradientFrom: "hover:from-blue-50",
      activeGradientFrom: "active:from-blue-300",
      textColor: "text-blue-900",
    },
  };

  const {
    borderColor,
    bgGradientFrom,
    bgGradientTo,
    hoverGradientFrom,
    textColor,
    activeGradientFrom,
  } = data[props.type];

  const className = `rounded-lg px-5 py-3 
      border-solid border-2 
      ${borderColor}
      inline-block 
      bg-gradient-to-b 
      ${bgGradientFrom}
      ${bgGradientTo}
      ${hoverGradientFrom}
      ${activeGradientFrom}
      font-bold ${textColor}
      cursor-pointer`;

  const externalLink = props.href.startsWith("http");
  const internalLink = props.href.startsWith("/");
  const notALink = !props.href && props.onClick;

  if (externalLink) {
    return (
      <a href={props.href} className={className}>
        {props.children}
      </a>
    );
  } else if (internalLink) {
    return (
      <Link href={props.href}>
        <p className={className}>{props.children}</p>
      </Link>
    );
  } else if (notALink) {
    return <div className={className}>{props.children}</div>;
  } else {
    throw new Error("Can't figure out what's going on with this button");
  }
};

export default Button;
