import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15 10"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d="M8.621 9.604c.695 0 1.237-.19 1.626-.572.389-.38.583-.915.583-1.602v-.71l2.04 1.73c.12.097.244.177.371.24a.85.85 0 0 0 .378.093.787.787 0 0 0 .6-.246c.155-.164.232-.38.232-.65v-5.76c0-.266-.077-.481-.231-.648a.782.782 0 0 0-.6-.249.85.85 0 0 0-.379.094 1.737 1.737 0 0 0-.372.252L10.83 3.301v-.729c0-.687-.194-1.22-.583-1.6-.389-.378-.93-.568-1.626-.568H2.844c-.668 0-1.202.19-1.603.569-.4.379-.6.912-.6 1.6v4.874c0 .688.193 1.219.58 1.594.386.375.927.563 1.623.563H8.62Zm-.17-.926H3.014c-.442 0-.784-.116-1.026-.349-.242-.232-.363-.583-.363-1.052V2.725c0-.47.121-.82.363-1.052.242-.233.584-.349 1.026-.349H8.45c.442 0 .783.117 1.026.352.242.234.363.584.363 1.049v4.552c0 .47-.122.82-.366 1.052-.245.233-.585.349-1.023.349Zm4.963-1.008a.11.11 0 0 1-.064-.02 3.45 3.45 0 0 0-.065-.045L10.83 5.591V4.425l2.455-2.01a.349.349 0 0 1 .065-.054.123.123 0 0 1 .064-.017c.063 0 .094.043.094.129v5.074c0 .082-.031.123-.094.123Z"
    />
  </svg>
);
export default SvgComponent;
