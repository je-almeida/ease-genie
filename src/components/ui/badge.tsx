import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/utils/cn"

const badgeVariants = cva(
  "body-lg inline-flex items-center rounded-full border px-sm py-xs transition-colors capitalize focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-surface hover:bg-surface1",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-errorLight text-errorDark hover:bg-errorLight/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
