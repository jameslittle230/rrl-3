import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 11 11"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d="M8.322 10.4c.364 0 .701-.065 1.014-.196.312-.13.596-.335.85-.612.144-.168.26-.346.348-.533.088-.188.132-.375.132-.563 0-.144-.03-.283-.088-.416a.796.796 0 0 0-.299-.34L8.574 6.533a1.515 1.515 0 0 0-.36-.21.9.9 0 0 0-.325-.065.727.727 0 0 0-.367.102c-.119.069-.24.167-.366.296l-.404.387a.268.268 0 0 1-.211.094.328.328 0 0 1-.123-.024 4.518 4.518 0 0 1-.1-.04 4.123 4.123 0 0 1-.67-.487c-.272-.23-.546-.482-.824-.756a15.035 15.035 0 0 1-.756-.823 3.953 3.953 0 0 1-.48-.665.904.904 0 0 1-.044-.106.37.37 0 0 1-.02-.123c0-.082.029-.15.087-.205l.393-.404c.125-.129.222-.253.29-.372a.737.737 0 0 0 .035-.689 1.963 1.963 0 0 0-.202-.369L2.926.393A.906.906 0 0 0 2.574.09a1.018 1.018 0 0 0-.44-.097c-.382 0-.74.16-1.071.48a2.44 2.44 0 0 0-.598.868A2.718 2.718 0 0 0 .277 2.35c0 .535.125 1.1.375 1.696.25.596.59 1.19 1.017 1.781a13.7 13.7 0 0 0 1.456 1.696c.54.543 1.107 1.033 1.705 1.468a8.98 8.98 0 0 0 1.793 1.031c.598.252 1.164.378 1.7.378Z"
    />
  </svg>
);
export default SvgComponent;