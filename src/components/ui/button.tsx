import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deewan-primary/50 focus-visible:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-deewan-primary text-white rounded-md shadow-md hover:bg-deewan-primary/90 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white text-black rounded-md border border-deewan-secondary/20 shadow-sm hover:shadow-md transition-all duration-300",
        accent:
          "bg-deewan-accent text-deewan-dark rounded-md shadow-md hover:shadow-lg transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 text-base",
        sm: "rounded-md px-3 text-sm",
        lg: "rounded-md px-8 text-md py-3 px-6",
        xl: "rounded-md px-8 text-lg py-3 px-6",
        icon: "h-10 w-10 text-base",
      },
      transition: {
        default: "hover:-translate-y-1",
        no: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      transition: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, transition, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, transition }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Create a ButtonLink component specifically for anchor tags
export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, transition, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, transition }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonLink.displayName = "ButtonLink"

export { Button, ButtonLink, buttonVariants }
