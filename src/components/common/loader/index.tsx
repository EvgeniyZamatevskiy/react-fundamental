import React, { FC } from "react"
import style from "./Loader.module.css"

export const Loader: FC = () => {
  return (
    <div className={style.loader}>
      <div className={style.bounceOne}></div>
      <div className={style.bounceTwo}></div>
      <div className={style.bounceThree}></div>
    </div>
  )
}
