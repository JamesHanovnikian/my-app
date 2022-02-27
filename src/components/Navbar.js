import React from "react"
import reactLogo from "../images/logo192.png"

export default function Navbar() {
  return (
    <nav classname="flex-container">
      <img src={reactLogo}
        alt="React Logo"
        className="nav-icon"
      />
      <h3>ReactFacts</h3>

      <h4> React Course - Project 1 </h4>
    </nav>
  )
}

