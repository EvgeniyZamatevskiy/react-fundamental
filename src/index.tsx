import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "context"
import { App } from "App"
import "styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </BrowserRouter>
)
