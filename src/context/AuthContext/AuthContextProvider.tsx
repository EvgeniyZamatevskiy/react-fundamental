import React, { FC, useState } from "react"
import { AuthContext } from "./AuthContext"
import { AuthContextProviderPropsType } from "./types"

export const AuthContextProvider: FC<AuthContextProviderPropsType> = ({children}) => {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
