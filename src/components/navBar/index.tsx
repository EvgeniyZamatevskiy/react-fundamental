import React, { FC, useContext } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "components"
import { AuthContext } from "context"
import { setToLocalStorage } from "services"
import { LocalStorageKey, Path } from "enums"
import classes from "./NavBar.module.css"

export const NavBar: FC = () => {

  const {setIsAuth} = useContext(AuthContext)

  const onLogOutClick = (): void => {
    setIsAuth(false)
    setToLocalStorage<boolean>(LocalStorageKey.AUTH, false)
  }

  return (
    <nav className={classes.nav}>
      <Button onClick={onLogOutClick}>Выйти</Button>
      <div className={classes.items}>
        <NavLink to={Path.POSTS}>Posts</NavLink>
        <NavLink to={Path.ABOUT}>About</NavLink>
      </div>
    </nav>
  )
}
