import { useState, useEffect, useRef, useContext } from "react"
import { ModalContext } from "../../context/ModalContext"

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef(null)
  const { closeModal } = useContext(ModalContext)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      //   alert("You clicked outside of me!")
      setIsComponentVisible(false)
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.addEventListener("click", handleClickOutside, true)
    }
  })
  return { ref, isComponentVisible, setIsComponentVisible }
}
