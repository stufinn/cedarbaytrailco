import React from "react"
import { LinkInternal } from "./utilities"

const RegisterBar = ({ className }) => {
  return (
    <section
      className={`grid justify-center bg-yellow-600 text-white text-3xl font-bold py-5 ${className} px-2`}
    >
      <div className="text-center">
        Before you ride or hike the trails, please be sure to&#160;
        <LinkInternal to="/register" className="underline inline">
          register
        </LinkInternal>
        .
      </div>
    </section>
  )
}

export default RegisterBar
