import type { SVGProps } from "react";

export default function ShadcnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <title>Shadcn</title>
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="#71717b"
        strokeWidth={25}
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
  );
}
