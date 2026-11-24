import type { ReactNode } from "react";

export type IconName =
  | "check"
  | "arrow-right"
  | "arrow-up-right"
  | "mic"
  | "edit"
  | "radio"
  | "coin"
  | "clock"
  | "voice"
  | "trending-up"
  | "chevron-down"
  | "stars"
  | "user";

const paths: Record<IconName, ReactNode> = {
  check: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.7 2.7L16 9.5" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M12 5l7 7-7 7" />,
  "arrow-up-right": <path d="M7 17L17 7M8 7h9v9" />,
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10v1a7 7 0 0014 0v-1M12 18v4" />
    </>
  ),
  edit: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />,
  radio: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8a6 6 0 010 8.4M7.8 16.2a6 6 0 010-8.4M19.1 4.9a10 10 0 010 14.2M4.9 19.1a10 10 0 010-14.2" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-5a2 2 0 100 4h2a2 2 0 110 4H8M12 6v2M12 16v2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  voice: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  "trending-up": <path d="M22 7l-8.5 8.5-5-5L2 17M16 7h6v6" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  stars: (
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const filled = name === "stars";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 1.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}