import React from "react"
import { Link } from "gatsby"
import { FaFacebook } from "react-icons/fa"

export default ({className}) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__facebook"
        >
          <FaFacebook />
        </a>
        <div className="footer__address">
          <div style={{ marginBottom: 15 }}>
            76 Lake Street
            <br />
            Sioux Lookout, Ontario
            <br /> P8T 1E5
          </div>{" "}
         
        </div>
       
      </div>
      

      <div className="footer__bottom">
        <div className="footer__copyrightInfo">
          © {new Date().getFullYear()}, Borealis Web Development
          <br />
          All Rights Reserved
        </div>
        <a
          href="#"
          className="footer__CMS settings__link"
          target="__blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </footer>
  )
}
