import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaHeart } from "react-icons/fa"

export default ({ className }) => {
  return (
    <footer className={className}>
      {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-5xl"

        >
          <FaFacebook />
        </a> */}

      <div className="grid gap-y-3 text-center">
        <div>© {new Date().getFullYear()}, Cedar Bay Trail Co.</div>
        <div className="flex">
          Made with&nbsp;
          <FaHeart className=" self-center" />
          &nbsp;by&nbsp;
          <a
            href="https://www.borealisweb.ca"
            target="__blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-600 hover:text-bold"
          >
            Borealis Web Development
          </a>
        </div>
        {/* <a
          href="#"
          className="footer__CMS settings__link"
          target="__blank"
          rel="noopener noreferrer"
        >
          Login
        </a> */}
      </div>
    </footer>
  )
}
