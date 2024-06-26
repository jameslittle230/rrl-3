import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentcolor"
      fillRule="nonzero"
      d="M5.686 11.693c.78 0 1.515-.15 2.203-.448a5.833 5.833 0 0 0 3.047-3.047 5.477 5.477 0 0 0 .445-2.2c0-.781-.149-1.515-.445-2.2A5.811 5.811 0 0 0 9.702 1.98 5.802 5.802 0 0 0 7.882.748 5.497 5.497 0 0 0 5.68.303c-.774 0-1.504.148-2.192.445a5.802 5.802 0 0 0-1.82 1.233A5.811 5.811 0 0 0 .437 3.798a5.477 5.477 0 0 0-.446 2.2c0 .781.15 1.515.448 2.2a5.842 5.842 0 0 0 3.05 3.047c.688.299 1.42.448 2.198.448Zm1.916-3.28a.512.512 0 0 1-.358-.147L5.691 6.707 4.133 8.266a.493.493 0 0 1-.363.146.478.478 0 0 1-.346-.143.477.477 0 0 1-.147-.355c0-.133.05-.248.147-.346l1.564-1.564-1.564-1.559a.48.48 0 0 1-.147-.351.488.488 0 0 1 .492-.486c.145 0 .262.046.352.14l1.57 1.564 1.57-1.57a.48.48 0 0 1 .352-.146c.137 0 .253.048.349.143a.492.492 0 0 1-.003.7L6.395 6.004l1.558 1.559a.492.492 0 0 1 .147.351.487.487 0 0 1-.498.498Z"
    />
  </svg>
);
export default SvgComponent;
