import { DetailedHTMLProps, SelectHTMLAttributes } from "react"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export type SelectPropsType = DefaultSelectPropsType & {
  options: any[]
  variant?: string
  optionClassName?: string
  setValue?: (value: any) => void
}
