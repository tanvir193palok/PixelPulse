"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalref.current?.open) {
      modalref.current?.showModal();
    }
  }, []);

  function onHide() {
    //Back function set the route to previous route
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalref}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md
       dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/icons/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
