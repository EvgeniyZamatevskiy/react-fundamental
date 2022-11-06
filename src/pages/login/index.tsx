import React, { FC, FormEvent, useContext } from "react"
import { Button, Input } from "components"
import { AuthContext } from "context"
import { setToLocalStorage } from "services"
import { LocalStorageKey } from "enums"
import classes from "./Login.module.css"

export const Login: FC = () => {

  const {setIsAuth} = useContext(AuthContext)

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setIsAuth(true)
    setToLocalStorage<boolean>(LocalStorageKey.AUTH, true)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input placeholder={"Введите логин"}/>
        <Input placeholder={"Введите пароль"}/>
        <Button type={"submit"}>Войти</Button>
      </form>
    </div>
  )
}
