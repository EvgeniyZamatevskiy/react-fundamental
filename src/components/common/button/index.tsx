import React, { FC } from "react"
import { ButtonPropsType } from "./types"

export const Button: FC<ButtonPropsType> = ({...restProps}) => <button {...restProps}/>
