import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import { ExternalLink } from "../components/utilities"

const H2 = ({ children, className }) => (
  <h2
    className={` border-b-2 pb-1 mb-3 font-semibold mt-5 text-3xl md:text-4xl  ${className}`}
  >
    {children}
  </h2>
)

const H3 = ({ children, className }) => (
  <h3
    className={`font-semibold mb-5 text-4xl md:text-5xl text-left  ${className}`}
  >
    {children}
  </h3>
)

const Li = ({ children, className = "grid" }) => (
  <li className={`mt-2 mb-5 ${className}`}>{children}</li>
)

const Emph = ({ children, className = "uppercase trackng-wide" }) => (
  <div className={`font-bold mb-2 ${className}   mt-10 text-4xl p-3`}>
    {children}
    <div className="border-b-2 mt-1 w-full max-w-xl"></div>
  </div>
)

const PageSection = ({ children, className = "" }) => (
  <div className={`md:p-5 ${className}`}>
    <div className={`flex mx-1 xs:mx-3 md:mx-10 lg:mx-32 justify-center`}>
      <div className="">{children}</div>
    </div>
  </div>
)

const IndentedItem = ({ children }) => <div className="ml-5">{children}</div>
const Register = ({ data }) => {
  const { waiverBackground } = data
  return (
    <Layout>
      <div>
        <SEO title="Registration" />
        <Hero fluid={waiverBackground.childImageSharp.fluid}>
          <h1 className="uppercase  text-4xl lg:text-6xl tracking-wide leading-none mt-10 font-semibold text-center mx-3">
            Registration
          </h1>
        </Hero>
        {/* Main Content */}
        <div className="grid py-10 lg:py-20">
          <PageSection className="mb-10 lg:mb-20 ">
            <h2 className="text-4xl lg:text-5xl text-center font-semibold leading-normal md:max-w-4xl">
              Registration for the 2024 Fatbike &amp; Snowshoe season is now
              open!
            </h2>
          </PageSection>
          <PageSection className="text-xl md:text-3xl bg-gray-600 text-white py-10 mx-0">
            <div className="mt-5 grid">
              <H3>Suggested contributions:</H3>
              <H2>Annual</H2>
              <ul className="list-disc ml-5 md:ml-10">
                <Li>Fatbike (Single): $80.00</Li>
                <Li>Fatbike (Family): $150.00</Li>
                <Li>Snowshoe (Single): $30.00</Li>
                <Li>Snowshoe (Family): $50.00</Li>
              </ul>
              <H2>Daily</H2>
              <ul className="list-disc ml-5 md:ml-10">
                <Li>Fatbike: $15.00</Li>
                <Li>Snowshoe: $5.00</Li>
              </ul>
            </div>
          </PageSection>
          <PageSection className="text-3xl mt-20 py-10 ">
            <H3>Registration for the season is a 3 step process.</H3>
            <ol className="">
              <Li>
                <Emph>Step&nbsp;1</Emph>{" "}
                <IndentedItem>
                  E-transfer your contribution(s) to Cedar Bay Trail Co. at{" "}
                  <a
                    href="mailto:cedarbaytrailcompany@gmail.com?subject='Registration'"
                    className="underline"
                  >
                    cedarbaytrailcompany
                    <wbr />
                    @gmail.com
                  </a>
                </IndentedItem>
              </Li>
              <Li>
                <Emph>Step 2</Emph>
                <IndentedItem>
                  <ExternalLink href="https://app.waiversign.com/e/5f995bf516eb010019446497/doc/5f99742ad56fea00190cafa3?event=none">
                    Sign and submit the online waiver
                  </ExternalLink>
                  .<span className="text-red-600">*</span> <br />
                  {/* <div className="ml-2 font-bold my-5">or</div> */}
                  {/* <ExternalLink href="#">
                    Download and print the waiver form
                  </ExternalLink> */}
                  {/* , sign it, scan it and send it to{" "} */}
                  {/* <ExternalLink href="mailto:cedarbaytrailcompany@gmail.com"> */}
                  {/* Hidden space allows for line breaking of email address on smaller screens */}
                  {/* <span className=""> */}
                  {/* cedarbaytrailcompany<span className="lg:hidden"> </span> */}
                  {/* @gmail.com */}
                  {/* </span> */}
                  {/* </ExternalLink> */}
                </IndentedItem>
                <div className="mt-12 text-2xl">
                  <span className="text-red-600 ">*</span>
                  <span className="italic">
                    When completing the online waiver you must tap on the
                    "Initial" or "Signature" boxes to auto-populate these areas.
                  </span>
                </div>
              </Li>
              <Li>
                <Emph>Step 3 </Emph>{" "}
                <IndentedItem>
                  <p>
                    <span className="italic">Go hit those trails!</span>{" "}
                    <span className="flex sm:inline-block justify-center">
                      <span role="img" aria-hidden>
                        🚲
                      </span>{" "}
                      <span role="img" aria-hidden>
                        ❄
                      </span>
                    </span>
                  </p>
                </IndentedItem>
              </Li>
            </ol>
          </PageSection>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WaiverQuery {
    logo: file(relativePath: { eq: "CBTCo_wh.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waiverBackground: file(
      relativePath: { eq: "tim-foster-N7e4-ssLi9k-unsplash.jpg" }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Register
