import React from "react"
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import Dashbroad from "./Dashbroad"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/register"} element={<Signup/>}></Route>
      <Route path={"/login"} element={<Login/>}></Route>
      <Route path={"/dashbroad"} element={<Dashbroad/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App