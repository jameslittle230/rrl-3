import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 11 12"
    {...props}
  >
    <title>{"\uDBC0\uDD14"}</title>
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d="M8.914 11.148c.594 0 1.04-.148 1.339-.445.299-.297.448-.736.448-1.318V2.629c0-.582-.15-1.022-.448-1.318-.299-.297-.745-.446-1.339-.446H2.2c-.59 0-1.035.148-1.336.443-.3.295-.45.735-.45 1.32v6.757c0 .586.15 1.026.45 1.321.301.295.746.442 1.336.442h6.715Zm-.041-1.002H2.24c-.261 0-.464-.07-.606-.21-.143-.141-.214-.35-.214-.627V2.705c0-.277.071-.486.214-.627.142-.14.345-.21.606-.21h6.633c.262 0 .465.07.61.21.144.14.216.35.216.627V9.31c0 .277-.072.486-.217.627-.144.14-.347.21-.609.21ZM3.846 8.154a.452.452 0 0 0 .34-.146l1.986-1.98.767-.833-.082.826v.92c0 .145.04.26.12.343.08.084.185.126.314.126a.398.398 0 0 0 .316-.135.508.508 0 0 0 .118-.345V4.34c0-.18-.046-.31-.138-.393a.547.547 0 0 0-.378-.123H4.602c-.141 0-.253.04-.337.12a.413.413 0 0 0-.126.314c0 .133.043.24.129.32.086.08.199.12.34.12h.972l.78-.089-.839.774-1.986 1.986a.441.441 0 0 0-.146.328c0 .137.042.247.126.331a.448.448 0 0 0 .33.126Z"
    />
  </svg>
);
export default SvgComponent;
