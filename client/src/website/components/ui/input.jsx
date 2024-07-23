import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-mercury flex w-full rounded-sm border bg-background p-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-2 md:py-1.5 md:text-[8px] lg:px-2.5 lg:py-2 lg:text-[9px] xl:rounded-md xl:border-2 xl:px-3.5 xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:text-[14px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
