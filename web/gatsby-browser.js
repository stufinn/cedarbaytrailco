import React from "react"
import { ModalProvider } from "./src/context/ModalContext"
import "./src/styles/tailwind.css"

// import "tailwindcss/base.css"
// import "tailwindcss/components.css"
// import "tailwindcss/utilities.css"

// Wrapping our root element in the ModalProvider

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
)
