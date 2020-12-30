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
        <div className="">
          © {new Date().getFullYear()}, Cedar Bay Trail Co.
        </div>
        <hr className="my-2" />
        <div className="flex flex-col md:flex-row items-center gap-y-1">
          <span className="flex">
            Made with &#160;
            <FaHeart />
            &#160;by&#160;
          </span>
          <a
            href="https://www.borealisweb.ca"
            target="__blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 hover:text-bold"
          >
            Borealis Web Development
          </a>
        </div>
        {/* <div className="flex-col md:flex-row">
          <span>Made with&nbsp;</span>
          <div className="grid justify-center">
            <FaHeart className=" self-center" />
          </div>
          &nbsp;by&nbsp;
          <a
            href="https://www.borealisweb.ca"
            target="__blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 hover:text-bold"
          >
            Borealis Web Development
          </a>
        </div> */}
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
