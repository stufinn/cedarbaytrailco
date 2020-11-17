import React from "react"

import { Link } from "gatsby"

const styles =
  "text-2xl border-4 font-bold border-white rounded-md p-2 uppercase tracking-wide hover:text-black hover:bg-white"

export default ({ to = null, href = null, text = "", className = "" }) => {
  // combine classes before inserting
  if (to) {
    return (
      <Link className={`${styles} ${className}`} to={to}>
        {text}
      </Link>
    )
  } else if (href) {
    return (
      <a
        href={href}
        className={`${styles} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    )
  }
}
