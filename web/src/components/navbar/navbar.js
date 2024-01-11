import React from "react"

import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav className=" absolute z-10 grid grid-flow-col gap-x-3 w-full text-white text-xl md:text-2xl mt-2 pr-4 md:pr-8 justify-end font-bold uppercase tracking-wide ">
      <Link
        to="/"
        activeClassName="activeNavLink"
        className="px-1 hover:text-yellow-600"
      >
        Home
      </Link>
      <Link
        to="/register"
        activeClassName="activeNavLink"
        className="px-1 hover:text-yellow-600"
      >
        {" "}
        Register
      </Link>
    </nav>
  )
}

export default NavBar
