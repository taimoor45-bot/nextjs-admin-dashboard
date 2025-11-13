import { IconProps } from "@/types/icon-props";

export function MarkIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.935 5.145a.75.75 0 0 1 .105 1.057l-6.06 7.185a.75.75 0 0 1-1.08.06L3.96 10.62a.75.75 0 1 1 1.08-1.04l2.385 2.475 5.535-6.56a.75.75 0 0 1 1.056-.105Z"
      />
    </svg>
  );
}
export function CrossIcon(props: IconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414Z"
      />
    </svg>
  );
}
