import React, { FC, MouseEvent } from "react"
import { ModalPropsType } from "./types"
import { Button } from "components"
import close from "assets/icons/close.svg"
import classes from "./Modal.module.css"

export const Modal: FC<ModalPropsType> = ({children, isActiveModal, onDeactivateModalClick}) => {

  const overlayClass = `${classes.overlay} ${classes.animated} ${isActiveModal ? classes.show : ""}`

  const onAscentCancellationClick = (event: MouseEvent<HTMLDivElement>): void => event.stopPropagation()

  return (
    <div className={overlayClass} onClick={onDeactivateModalClick}>
      <div className={classes.modal} onClick={onAscentCancellationClick}>
        <Button className={classes.crossContainer} onClick={onDeactivateModalClick}>
          <img src={close} alt="close"/>
        </Button>
        {children}
      </div>
    </div>
  )
}
