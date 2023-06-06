import clsx from "clsx";
import { FC, ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "2xl" | "3xl" | "4xl";
  children?: ReactNode;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({
  as: Comp = "h1",
  size = "4xl",
  children,
  className,
}) => {
  return (
    <Comp
      className={clsx(
        "font-sans font-semibold tracking-tighter text-slate-800",
        size === "4xl" && "text-3xl md:text-4xl",
        size === "3xl" && "text-3xl",
        size === "2xl" && "text-2xl",
        size === "xl" && "text-xl",
        className
      )}
    >
      {children}
    </Comp>
  );
};
