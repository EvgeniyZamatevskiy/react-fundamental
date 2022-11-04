import { DetailedHTMLProps, SelectHTMLAttributes } from "react"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export type SelectPropsType = DefaultSelectPropsType & {
  options: any[]
  setValue?: (value: any) => void
}
