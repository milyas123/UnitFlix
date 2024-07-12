import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-sm border border-smokeyGrey border-opacity-20 bg-background px-3 py-3 ps-7 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey placeholder:text-muted-foreground focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:py-1.5 md:ps-2.5 md:text-[8px] xl:border-2 lg:py-2 lg:text-[9px] xl:py-2.5 xl:text-[12px] 2xl:py-3 2xl:ps-10 2xl:text-[14px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
