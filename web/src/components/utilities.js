import React from "react"
import { Link } from "gatsby"

export const LinkInternal = ({ to = "#", className = "", children }) => {
  return (
    <Link to={to} className={`${className}`}>
      {children}
    </Link>
  )
}

export const ExternalLink = ({
  children = "EXTERNAL LINK TEXT",
  href = "#",
  className = "",
}) => (
  <a
    href={`${href}`}
    target="_blank"
    rel="noopener noreferrer"
    className={` underline hover:font-bold  ${className}`}
  >
    {children}
  </a>
)
