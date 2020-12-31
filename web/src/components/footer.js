import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaHeart } from "react-icons/fa"
import { GrBike } from "react-icons/gr"
import Img from "gatsby-image"

import { ExternalLink } from "./utilities"

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
    <footer className={`grid py-3 px-10 ${className}`}>
      {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-5xl"

        >
          <FaFacebook />
        </a> */}

      <div className="grid lg:grid-flow-col lg:grid-cols-2 justify-center ">
        <div className="grid text-center lg:text-left items-center font-bold">
          <div>© {new Date().getFullYear()}, Cedar Bay Trail Co.</div>
          <ExternalLink
            href="mailto:cedarbaytrailcompany@gmail.com"
            className="hover:text-yellow-600"
          >
            {/* Hidden space allows for line breaking of email address on smaller screens */}
            <span className="">
              cedarbaytrailcompany<span className="lg:hidden"> </span>
              @gmail.com
            </span>
          </ExternalLink>
        </div>
        {/* Separator line */}
        <div className=" border border-yellow-600 lg:hidden justify-self-center w-1/2 my-5" />
        {/* Separator line END */}

        <div className="flex flex-col md:flex-row  items-center justify-center lg:justify-end  gap-y-1 ">
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
            className="w-60"
            title="Borealis Web Development"
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
