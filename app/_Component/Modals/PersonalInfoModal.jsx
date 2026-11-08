import React from "react";
import Modal from "./Modal";
import ImageCarousel from "../ImageCarousel";

function PersonalInfoModal({ uniqueName = "", isOpen, setIsOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      uniqueName={"personal-information-" + uniqueName}
    >
      <div className="max-w-[80vw] max-h-[80vh] w-fit overflow-auto p-4 pb-6 ">
        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            About me
          </h3>
          <p className="text-gray-700 dark:text-gray-300  max-w-[90ch]">
            I grew up in a small village in western Syria, surrounded by hills,
            olive trees, and a close-knit community. That environment shaped how
            I work today — with patience, craftsmanship, and quiet resilience.
            These values continue to guide how I build software and approach
            collaboration.
          </p>
        </section>
        <section className="mb-6 max-w-[90ch] mt-4">
          <ImageCarousel
            images={[
              {
                src: "/avatar.jpg",
                title: "My village in western Syria",
                description:
                  "Where I grew up, surrounded by olive trees and hills.",
              },
              {
                src: "/avatar.jpg",
                title: "Where I grew up",
                description:
                  "Where I grew up, surrounded by olive trees and hills.",
              },
            ]}
          />
        </section>

        <section>
          <p className="text-gray-700 dark:text-gray-300  max-w-[90ch]">
            Outside of code, I’m drawn to quiet places and practical skills. I
            enjoy learning by doing — whether it’s building tools, exploring
            nature, or studying how people live simply and intentionally.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-4">
            <li>
              Interested in cabin life, off-grid living, and DIY craftsmanship
            </li>
            <li>
              Enjoy football, historical tools, and ethical hunting practices
            </li>
            <li>
              Inspired by people like Dick Proenneke — quiet resilience and
              self-reliance
            </li>
            <li>
              Curious about fishing, bow-making, and sustainable outdoor skills
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300  max-w-[90ch] mt-4">
            I see software as another kind of tool — one that should serve
            people quietly, reliably, and with purpose.
          </p>
        </section>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          If you're curious about my background or want to chat beyond the code,
          I'm always open to a thoughtful conversation.
        </p>
      </div>
    </Modal>
  );
}

export default PersonalInfoModal;
