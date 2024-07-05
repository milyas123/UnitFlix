import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border-2 border-smokeyGrey border-opacity-15 bg-background px-3 ps-10 py-2 text-md ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-hitGrey disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
