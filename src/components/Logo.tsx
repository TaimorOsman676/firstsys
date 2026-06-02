import * as React from "react";

export function Logo({
  size = 32,
  variant = "icon",
  locale = "en",
  className = "",
}: {
  size?: number;
  variant?: "icon" | "full" | "text";
  locale?: string;
  className?: string;
}) {
  const green = "#00bd3a";

  const renderMonogram = () => (
    <g>
      {/* Green Square Background */}
      <rect x="10" y="10" width="160" height="160" fill={green} />
      {/* White Intersecting TFS Monogram */}
      {/* F vertical stem */}
      <path d="M 45,10 L 45,130" stroke="white" strokeWidth="18" strokeLinecap="butt" />
      {/* F horizontal bar */}
      <path d="M 45,75 L 115,75" stroke="white" strokeWidth="18" strokeLinecap="butt" />
      {/* S curve */}
      <path
        d="M 145,95 C 105,92 90,110 118,128 C 144,142 144,170 102,170"
        stroke="white"
        strokeWidth="18"
        fill="none"
        strokeLinecap="butt"
      />
    </g>
  );

  if (variant === "text") {
    return (
      <svg
        viewBox="0 0 320 180"
        width={size * 1.8}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {locale === "ar" ? (
          <g>
            <text
              x="0"
              y="85"
              fill={green}
              fontSize="48"
              fontWeight="800"
              fontFamily="var(--font-arabic)"
              letterSpacing="0.02em"
            >
              النظام الأول
            </text>
            <text
              x="0"
              y="135"
              fill={green}
              fontSize="20"
              fontWeight="700"
              fontFamily="var(--font-arabic)"
              letterSpacing="0.02em"
            >
              كيماويات البناء والديكور
            </text>
          </g>
        ) : (
          <g>
            <text
              x="0"
              y="48"
              fill={green}
              fontSize="38"
              fontWeight="800"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
            >
              THE
            </text>
            <text
              x="0"
              y="94"
              fill={green}
              fontSize="48"
              fontWeight="800"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
            >
              FIRST
            </text>
            <text
              x="0"
              y="142"
              fill={green}
              fontSize="48"
              fontWeight="800"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
            >
              SYSTEM
            </text>
            <text
              x="0"
              y="168"
              fill={green}
              fontSize="9.5"
              fontWeight="700"
              fontFamily="var(--font-sans)"
              letterSpacing="0.02em"
            >
              DECORATIVE AND CONSTRUCTION CHEMICALS
            </text>
          </g>
        )}
      </svg>
    );
  }

  if (variant === "full") {
    // Determine horizontal spacing based on language
    const isAr = locale === "ar";
    return (
      <svg
        viewBox="0 0 520 180"
        width={size * 2.8}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Monogram Symbol */}
        {renderMonogram()}

        {/* Divider line */}
        <line x1="190" y1="10" x2="190" y2="170" stroke={green} strokeWidth="6" />

        {/* Brand Name Text */}
        {isAr ? (
          <g>
            <text
              x="210"
              y="85"
              fill={green}
              fontSize="48"
              fontWeight="800"
              fontFamily="var(--font-arabic)"
              letterSpacing="0.02em"
            >
              النظام الأول
            </text>
            <text
              x="210"
              y="135"
              fill={green}
              fontSize="20"
              fontWeight="700"
              fontFamily="var(--font-arabic)"
              letterSpacing="0.02em"
            >
              كيماويات البناء والديكور
            </text>
          </g>
        ) : (
          <g>
            <text
              x="210"
              y="48"
              fill={green}
              fontSize="38"
              fontWeight="800"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
            >
              THE
            </text>
            <text
              x="210"
              y="94"
              fill={green}
              fontSize="48"
              fontWeight="800"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
            >
              FIRST
            </text>
            <text
              x="210"
              y="142"
              fill={green}
              fontSize="48"
              fontWeight="800"
              fontFamily="var(--font-sans)"
              letterSpacing="0.05em"
            >
              SYSTEM
            </text>
            <text
              x="210"
              y="168"
              fill={green}
              fontSize="9.5"
              fontWeight="700"
              fontFamily="var(--font-sans)"
              letterSpacing="0.02em"
            >
              DECORATIVE AND CONSTRUCTION CHEMICALS
            </text>
          </g>
        )}
      </svg>
    );
  }

  // Icon only
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {renderMonogram()}
    </svg>
  );
}

