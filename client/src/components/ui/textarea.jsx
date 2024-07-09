import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex md:min-h-[20px] 2xl:min-h-[80px] w-full rounded-md md:border lg:border-2 border-smokeyGrey border-opacity-15 bg-background px-3 md:ps-8 2xl:ps-10 py-2 md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-hitGrey disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
