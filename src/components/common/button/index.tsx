import React, { FC } from "react"
import { ButtonPropsType } from "./types"
import classes from "./Button.module.css"
import { EMPTY_STRING } from "constants/base"

export const Button: FC<ButtonPropsType> = ({variant, className, ...restProps}) => {

  const buttonClass = variant ? classes[variant] : classes.button
  const additionalButtonClass = className ? className : EMPTY_STRING
  const buttonClasses = `${buttonClass} ${additionalButtonClass}`

  return <button className={buttonClasses} {...restProps}/>
}
