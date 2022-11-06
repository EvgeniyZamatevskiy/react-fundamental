import React, { FC } from "react"
import { AppRouter, NavBar } from "components"

export const App: FC = () => {
  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
