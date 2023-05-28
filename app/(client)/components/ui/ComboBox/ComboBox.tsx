import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Button, ButtonProps } from "../Button/Button"

export interface ComboboxItem<T> {
  label: string
  value: T
}

interface ComboboxProps<T> {
  label?: string
  items: ComboboxItem<T>[]
  defaultValue?: ComboboxItem<T>
  buttonSize?: ButtonProps["size"]
  // selectedItem: ComboboxItem
  onChange: (item: ComboboxItem<T>) => void
}

export function Combobox<T>({
  label,
  items,
  onChange,
  buttonSize,
}: ComboboxProps<T>) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div>
          <Button
            className="IconButton"
            aria-label="Customize options"
            size={buttonSize}
          >
            {label && <span className="Label">{label}</span>}
          </Button>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {items.map((item, i) => (
            <DropdownMenu.Item
              key={i}
              onSelect={() => onChange(item)}
              className="outline-none"
            >
              <Button className="h-min" size={buttonSize} intent={"secondary"}>
                {item.label}
              </Button>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
