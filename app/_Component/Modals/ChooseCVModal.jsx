import React from "react";
import Modal from "./Modal";

function ChooseCVModal({
  uniqueName = "",
  isOpen,
  setIsOpen,
  jobTitle = "",
  listOfCVs = [],
}) {
  return (
    <Modal
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      uniqueName={"CV-Select-" + uniqueName}
    >
      <div className="max-w-[80vw] max-h-[80vh] overflow-auto p-4 pb-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 self-center">
            {jobTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 pr-4">
            Please choose the CV best structured for your country:
          </p>
          <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-3 ">
            {listOfCVs.map((cv) => (
              <a
                aria-label={"Download CV for " + cv.title}
                href={cv.url}
                key={cv.title}
                target="_blank"
                className="px-2 py-1 text-sm bg-blue-600 shadow-md shadow-black text-white rounded hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer"
              >
                {cv.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ChooseCVModal;
