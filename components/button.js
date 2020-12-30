import Link from "next/link";

const Button = (props) => {
  const baseColorValue = props.colorValue || 500;

  const className = `rounded-lg px-5 py-3 
      border-solid border-2 
      border-${props.color}-${baseColorValue}
      inline-block 
      bg-gradient-to-b 
      from-${props.color}-${baseColorValue - 400} 
      to-${props.color}-${baseColorValue - 300}
      hover:from-${props.color}-50
      font-bold text-${props.color}-900
      cursor-pointer`;

  const externalLink = props.href.startsWith("http");
  const internalLink = props.href.startsWith("/");
  const notALink = !props.href && props.onClick;

  console.log(externalLink, internalLink, notALink);

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
