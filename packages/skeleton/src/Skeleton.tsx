import { useEffect } from "react";

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  variant?: "text" | "rect" | "circle";
};

let stylesInjected = false;

export function Skeleton({
  width = "100%",
  height = 16,
  variant = "text",
}: SkeletonProps) {
  useEffect(() => {
    if (stylesInjected) return;

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes nogateui-skeleton-shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `;
    document.head.appendChild(style);
    stylesInjected = true;
  }, []);

  const borderRadius =
    variant === "circle" ? "50%" : variant === "rect" ? 10 : 6;

  return (
    <div
      aria-busy="true"
      style={{
        position: "relative",
        overflow: "hidden",
        width,
        height,
        borderRadius,
        backgroundColor: "#e5e7eb",
      }}
    >
      {/* Shimmer overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 70%)",
          animation: "nogateui-skeleton-shimmer 1.6s ease-in-out infinite",
        }}
      />
    </div>
  );
}
