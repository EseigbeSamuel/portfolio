// "use client";
// import React, { createContext, useState, useContext } from "react";

// import { ReactNode } from "react";

// export interface ModalContextType {
//   isOpen: boolean;
//   modalContent: ReactNode | null;
//   title: string;
//   openModal: (content: ReactNode, title?: string) => void;
//   closeModal: () => void;
// }

// const ModalContext = createContext({
//   isOpen: false,
//   modalContent: null,
//   title: "",
//   openModal: (content, title = "") => {},
//   closeModal: () => {},
// });

// export function ModalProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState(null);
//   const [title, setTitle] = useState("");

//   const openModal = (content, newTitle = "Modal") => {
//     setModalContent(content);
//     setTitle(newTitle);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setModalContent(null);
//     setTitle("");
//   };

//   return (
//     <ModalContext.Provider
//       value={{ isOpen, modalContent, title, openModal, closeModal }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// }

// export function useModal() {
//   return useContext(ModalContext);
// }
// contexts/ModalContext.tsx

"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface ModalContextType {
  isOpen: boolean;
  modalContent: ReactNode | null;
  title: string;
  openModal: (content: ReactNode, title?: string) => void;
  closeModal: () => void;
}

const defaultContextValue: ModalContextType = {
  isOpen: false,
  modalContent: null,
  title: "",
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextType>(defaultContextValue);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [title, setTitle] = useState<string>("");

  const openModal = (content: ReactNode, newTitle: string = "Modal") => {
    setModalContent(content);
    setTitle(newTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setTitle("");
  };

  const contextValue: ModalContextType = {
    isOpen,
    modalContent,
    title,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextType {
  return useContext(ModalContext);
}
