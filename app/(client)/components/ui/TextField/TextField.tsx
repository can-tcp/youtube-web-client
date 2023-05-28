import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const textField = cva(
  [
    "border-2",
    "border-blue-400",
    "dark:bg-gray-900",
    "rounded-xl",
    "px-4",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      size: {
        sm: ["h-10", "text-sm"],
        lg: ["h-12", "text-lg"],
      },
      focus: {
        true: ["focus:border-blue-500", "focus:outline-none"],
        false: [],
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
)

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textField> {
  focus?: boolean
}

export function TextField({
  className,
  size,
  value,
  focus = true,
  ...props
}: TextFieldProps) {
  return (
    <input
      className={twMerge(textField({ size, className, focus }))}
      {...props}
    />
  )
}
