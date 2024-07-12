import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full rounded-sm border border-smokeyGrey border-opacity-15 bg-background px-3 py-3 ps-7 ring-offset-background placeholder:text-grey placeholder:text-muted-foreground focus:border-hitGrey focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:min-h-[20px] md:py-1.5 md:ps-3 md:text-[8px] lg:py-2 lg:text-[9px] xl:border-2 xl:py-2.5 xl:text-[12px] 2xl:min-h-[80px] 2xl:py-3 2xl:ps-10 2xl:text-[14px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
