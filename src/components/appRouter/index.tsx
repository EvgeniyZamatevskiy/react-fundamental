import React, { FC, Suspense, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "router"
import { AuthContext } from "context"
import { Loader } from "components"

export const AppRouter: FC = () => {

  const {isAuth} = useContext(AuthContext)

  return (
    <>
      {isAuth
        ? <Suspense fallback={<Loader/>}>
          <Routes>
            {privateRoutes.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
          </Routes>
        </Suspense>
        : <Suspense fallback={<Loader/>}>
          <Routes>
            {publicRoutes.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
          </Routes>
        </Suspense>}
    </>
  )
}
