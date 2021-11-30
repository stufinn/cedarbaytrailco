import React, { createContext, useState } from "react"

const defaultValues = {
  isModalVisible: true,
  closeModal: () => console.log("CLOSE MODAL"),
  openModal: () => console.log("OPEN MODAL"),
}

export const ModalContext = createContext(defaultValues)

// Start of Modal Provider

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setModalVisible] = useState(
    defaultValues.isModalVisible
  )

  const closeModal = () => setModalVisible(false)
  const openModal = () => setModalVisible(true)

  return (
    <ModalContext.Provider
      value={{ ...defaultValues, closeModal, openModal, isModalVisible }}
    >
      {children}
    </ModalContext.Provider>
  )
}
