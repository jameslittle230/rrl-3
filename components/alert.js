const Alert = ({ title, children, endContent, color, icon }) => {
  const data = {
    red: {
      ringColor: "ring-red-400",
      bgColor: "bg-red-300",
      textColor: "text-red-800",
      exclamationBgColor: "bg-red-800",
      exclamationTextColor: "text-red-300",
      headerTextColor: "text-red-900",
    },

    yellow: {
      ringColor: "ring-yellow-400",
      bgColor: "bg-yellow-300",
      textColor: "text-yellow-800",
      exclamationBgColor: "bg-yellow-800",
      exclamationTextColor: "text-yellow-300",
      headerTextColor: "text-yellow-900",
    },

    green: {
      ringColor: "ring-green-400",
      bgColor: "bg-green-300",
      textColor: "text-green-800",
      exclamationBgColor: "bg-green-800",
      exclamationTextColor: "text-green-300",
      headerTextColor: "text-green-900",
    },
  };

  const {
    ringColor,
    bgColor,
    textColor,
    exclamationBgColor,
    exclamationTextColor,
    headerTextColor,
  } = data[color || "red"];

  const containerClassName = `rounded px-5 py-3
  ring ${ringColor} ${bgColor} ${textColor} 
  text-sm
  justify-between flex-column space-y-4
  md:flex md:items-center md:flex-row md:items-middle md:space-y-0 md:space-x-4`;

  const exclamationBackgroundClassName = `hidden md:block h-10 w-10 
  flex-shrink-0 text-center ${exclamationBgColor} ${exclamationTextColor} rounded-full`;

  const headerClassName = `${headerTextColor} font-bold text-lg`;

  let iconCharacter = "!";
  if (icon == "check") {
    iconCharacter = "✓";
  }

  return (
    <div className={containerClassName}>
      <div className={exclamationBackgroundClassName}>
        <span className="font-extrabold text-4xl">{iconCharacter}</span>
      </div>
      <div className="alert-body-container flex-grow">
        <h1 className={headerClassName}>{title}</h1>
        {children}
      </div>
      <div className="flex-shrink-0">{endContent}</div>
    </div>
  );
};

export default Alert;
