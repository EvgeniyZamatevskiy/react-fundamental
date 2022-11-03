import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type CheckboxPropsType = Omit<DefaultInputPropsType, "type"> & {
  setChecked?: (checked: boolean) => void
}
