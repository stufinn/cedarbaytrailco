import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaHeart } from "react-icons/fa"
import { GrBike } from "react-icons/gr"
import Img from "gatsby-image"

export default ({ className }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      borealisLogo: file(relativePath: { eq: "Borealis.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { borealisLogo } = data
  debugger
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

      <div className="grid gap-y-1 text-center">
        <div className="">
          © {new Date().getFullYear()}, Cedar Bay Trail Co.
        </div>
        <hr className="my-2" />
        <div className="flex flex-col  items-center gap-y-1">
          <span className="flex">
            Created with&#160;
            <span className="grid items-center">
              <FaHeart />{" "}
            </span>
            &#160;by
          </span>
          <a
            href="https://www.borealisweb.ca"
            target="__blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-400 hover:text-bold w-60"
          >
            <Img fluid={borealisLogo.childImageSharp.fluid} />
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
