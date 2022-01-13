import React from "react"
import MyImg from "./components/MyImg"
import Name from "./components/Name"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"



export default function Photos () {
    return (
        <nav className="nav">
        <div className="appdiv">
        <MyImg/>
        <Name/>
        <div className="secBody">
        <About/>
        <Interest/>
        </div>
        </div>
        <Footer/>
        </nav>
    )
}