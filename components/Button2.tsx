import Link from "next/link";

const Button = (props: {
  type: keyof typeof data;
  href: any;
  onClick?: any;
  children: React.ReactNode;
}) => {
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

    yellow: {
      borderColor: "border-yellow-600",
      bgGradientFrom: "from-yellow-200",
      bgGradientTo: "to-yellow-300",
      hoverGradientFrom: "hover:from-yellow-100",
      activeGradientFrom: "active:from-yellow-400",
      textColor: "text-yellow-900",
    },

    blue: {
      borderColor: "border-blue-500",
      bgGradientFrom: "from-blue-100",
      bgGradientTo: "to-blue-200",
      hoverGradientFrom: "hover:from-blue-50",
      activeGradientFrom: "active:from-blue-300",
      textColor: "text-blue-900",
    },

    green: {
      borderColor: "border-green-500",
      bgGradientFrom: "from-green-100",
      bgGradientTo: "to-green-200",
      hoverGradientFrom: "hover:from-green-50",
      activeGradientFrom: "active:from-green-300",
      textColor: "text-green-900",
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

  return (
    <Link href={props.href} className={className} {...props}>
      {props.children}
    </Link>
  );
};

export default Button;
