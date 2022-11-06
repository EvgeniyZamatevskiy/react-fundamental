import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import classes from "./NavBar.module.css"

export const NavBar: FC = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.items}>
        <NavLink to={"/posts"}>Posts</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </nav>
  )
}
