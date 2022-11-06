import { Navigate } from "react-router-dom"
import { Path } from "enums"
import { lazy } from "react"

const Posts = lazy(() => import(/* webpackChunkName: 'Posts' */"pages/posts")
  .then(module => ({default: module.Posts})))

const Login = lazy(() => import(/* webpackChunkName: 'Login' */"pages/login")
  .then(module => ({default: module.Login})))

const Post = lazy(() => import(/* webpackChunkName: 'Post' */"pages/post")
  .then(module => ({default: module.Post})))

const About = lazy(() => import(/* webpackChunkName: 'About' */"pages/about")
  .then(module => ({default: module.About})))

export const privateRoutes = [
  {path: Path.POSTS, element: <Posts/>},
  {path: `${Path.POSTS}/:postId`, element: <Post/>},
  {path: Path.ABOUT, element: <About/>},
  {path: Path.NOT_FOUND, element: <Navigate to={Path.POSTS}/>},
]

export const publicRoutes = [
  {path: Path.LOGIN, element: <Login/>},
  {path: Path.NOT_FOUND, element: <Login/>},
]
