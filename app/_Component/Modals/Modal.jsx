"use client";
import React, { useEffect } from "react";

function Modal({ isOpen, close, children, uniqueName = "unique" }) {
  const handleOutsideClick = (event) => {
    const content = document.getElementById("content");
    if (!content) {
      return;
    }
    if (!content.contains(event.target)) {
      close();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("overflow-hidden");
    const modalContainer = document.getElementById(
      `modal-container-${uniqueName}`
    );
    if (!modalContainer) {
      return;
    }

    // Attach the memoized event listener
    modalContainer.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.classList.remove("overflow-hidden");
      modalContainer.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div id={`modal-container-${uniqueName}`} tabIndex={"0"}>
      {isOpen && (
        <div className="fixed left-0 top-0 w-full h-full  bg-black/60 z-50 overflow-hidden backdrop-blur flex flex-col justify-center items-center ">
          <div
            id="content"
            className={`w-fit h-fit bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded animate-popIn shadow-lg shadow-black relative`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
