export type AuthContextType = {
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
}

export type AuthContextProviderPropsType = {
  children: JSX.Element | JSX.Element[]
}
