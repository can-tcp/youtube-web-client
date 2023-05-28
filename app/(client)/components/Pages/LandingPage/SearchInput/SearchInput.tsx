import { ChangeEvent, FC } from "react"
import { TextField } from "@/components/ui/TextField/TextField"

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<Props> = ({ value, onChange }) => (
  <TextField
    className="mb-4 w-full"
    value={value}
    onChange={onChange}
    placeholder="Search for anything"
  />
)

export default SearchInput
