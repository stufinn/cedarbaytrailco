import React from "react"
import { Link } from "gatsby"

export const LinkInternal = ({ to = "#", className = "", children }) => {
  return (
    <Link to={to} className={`${className}`}>
      {children}
    </Link>
  )
}
