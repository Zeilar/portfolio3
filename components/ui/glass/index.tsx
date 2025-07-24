import type { HTMLAttributes } from "react";
import classNames from "classnames";

export function Glass({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames(
        "backdrop-blur-sm border border-white/15 rounded-3xl p-8 max-w-md",
        className
      )}
      {...props}
    />
  );
}
