"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-500"],
        secondary: [
          "bg-transparent",
          "text-blue-400",
          "hover:enabled:bg-blue-400",
          "hover:enabled:text-white",
        ],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
      hover: { true: ["hover:bg-blue-400 hover:text-white"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean
  // href: string
  hover?: boolean
}

export function Button({
  className,
  intent,
  size = "sm",
  underline,
  hover = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(button({ intent, size, className, underline, hover }))}
      {...props}
    >
      {props.children}
    </button>
  )
}
