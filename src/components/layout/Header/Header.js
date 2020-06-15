import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  let headerStyle= {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "20px 0"
  }
  let linkStyle= {
    color: "white",
    textDecoration: "none"
  }
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}
