import React, { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { About, Post, Posts } from "pages"
import classes from "./AppRouter.module.css"

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/posts"}/>}/>
      <Route path={"/posts"} element={<Posts/>}/>
      <Route path={"/posts/:postId"} element={<Post/>}/>
      <Route path={"/about"} element={<About/>}/>
      <Route path={"*"} element={<Navigate to={"/404"}/>}/>
      <Route path={"/404"} element={<h1>Page not found 404</h1>}/>
    </Routes>
  )
}
