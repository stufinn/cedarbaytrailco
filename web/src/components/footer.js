import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaHeart, FaFacebook } from "react-icons/fa"
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
          {/* Facebook link */}

          <ExternalLink
            className="text-5xl my-2 hover:text-yellow-600 no-underline justify-self-center lg:justify-self-start flex items-end gap-x-2"
            href="https://www.facebook.com/groups/326260264407436"
          >
            {/* <span className="text-2xl"> Visit us on Facebook</span> */}
            <FaFacebook />
          </ExternalLink>
          <div>
            <ExternalLink
              href="mailto:cedarbaytrailcompany@gmail.com"
              className="hover:text-yellow-600 "
            >
              {/* Hidden space allows for line breaking of email address on smaller screens */}
              <span className="">Email us</span>
            </ExternalLink>
          </div>
          <div className="mt-2">
            © {new Date().getFullYear()},<br className="lg:hidden" /> Cedar Bay
            Trail Co.
          </div>
        </div>
        {/* Separator line */}
        <div className=" border border-yellow-600 lg:hidden w-1/2 my-5 justify-self-center" />
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
