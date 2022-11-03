import { DetailedHTMLProps, InputHTMLAttributes, Ref } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type InputPropsType = Omit<DefaultInputPropsType, "type"> & {
  setValue?: (value: string) => void
  onEnter?: () => void
  onEscape?: () => void
  errorMessage?: string
  ref?: Ref<HTMLInputElement>
}
