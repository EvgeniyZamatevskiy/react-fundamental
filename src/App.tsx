import React, { FC, useContext, useEffect } from "react"
import { AppRouter, NavBar } from "components"
import { AuthContext } from "context"
import { getFromLocalStorage } from "services"
import { LocalStorageKey } from "enums"

export const App: FC = () => {

  const {setIsAuth} = useContext(AuthContext)

  useEffect(() => {
    if (getFromLocalStorage<boolean>(LocalStorageKey.AUTH, false)) {
      setIsAuth(true)
    }
  }, [])

  return (
    <div className="app">
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
