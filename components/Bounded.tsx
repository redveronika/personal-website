import clsx from "clsx";
import { FC, ReactNode } from "react";

type BoundedProps = {
  as?: "footer" | "header" | "div" | "section";
  size?: "small"| "base" | "wide" | "widest";
  children?: ReactNode;
  className?: string;
}

export const Bounded: FC<BoundedProps> = ({
  as: Comp = "div",
  size = "base",
  className,
  children,
}) => {
  return (
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-12", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
};
