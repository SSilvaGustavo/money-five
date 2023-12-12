import { useEffect, useState, useContext } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { AppContext } from "@/context/AppContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser  } from "react-icons/fa6";

import logo from "@/assets/logoWhite.svg";
import Image from "next/image";
import toast from "react-hot-toast";

export const RegisterModal = () => {
  const { isRegisterModalOpen, setIsRegisterModalOpen } =
    useContext(AppContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleSuccess = () => {
    setLoading(true)
    setTimeout(() => {
      toast.success("Usuário criado com sucesso!")
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    if (!isRegisterModalOpen) {
      handleCloseModal();
    }
  }, [isRegisterModalOpen]);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content
        className="flex items-center justify-center flex-col fixed w-[400px] bg-secondary-300 py-8 px-10 text-white top-[38%] left-1/2 
        -translate-x-1/2 -translate-y-1/3 rounded-lg shadow-lg shadow-black/25
        animate-content-show"
      >
          <Image src={logo} alt="logo" width={250} className=""/>
        <Dialog.Title className="text-xl text-center mt-6">
          Registre-se pra ter acesso a conteúdos exclusivos de qualidade
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-4 w-full">
        <div className="flex w-full">
            <span className="inline-flex items-center px-3 text-sm rounded-e-0 rounded-s-md bg-gray-400 text-white">
              <FaUser className="w-4 h-4 text-secondary-200" />
            </span>
            <input
              type="text"
              className="rounded-none rounded-e-lg text-black font-semibold min-w-0 w-full border border-gray-400 text-sm p-2.5 outline-none focus:border-gray-500"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex w-full">
            <span className="inline-flex items-center px-3 text-sm rounded-e-0 rounded-s-md bg-gray-400 text-white">
              <FaEnvelope className="w-4 h-4 text-secondary-200" />
            </span>
            <input
              type="text"
              className="rounded-none rounded-e-lg text-black font-semibold min-w-0 w-full border border-gray-400 text-sm p-2.5 outline-none focus:border-gray-500"
              placeholder="Email"
            />
          </div>

          <div className="flex relative w-full">
            <span className="inline-flex items-center px-3 text-sm rounded-e-0 rounded-s-md bg-gray-400 text-white">
              <FaLock className="w-4 h-4 text-secondary-200" />
            </span>
            <input
              type={show ? "text" : "password"}
              className="rounded-none rounded-e-lg text-black font-semibold min-w-0 w-full border border-gray-400 text-sm p-2.5 outline-none focus:border-gray-500"
              placeholder="Senha"
            />
            {!show ? (
              <FaEye
                className="cursor-pointer w-4 h-4 text-secondary-200 absolute right-2 top-3"
                onClick={() => setShow(!show)}
              />
            ) : (
              <FaEyeSlash
                className="cursor-pointer w-4 h-4 text-secondary-200 absolute right-2 top-3"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="px-5 h-12 rounded-md font-semibold"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="button"
              className={`flex items-center gap-3 px-5 h-12 rounded-md font-semibold bg-primary-100/80 hover:bg-primary-100 transition-colors disabled:bg-gray-500 disabled:pointer-events-none`}
              disabled={loading}
              onClick={() => handleSuccess()}
            >
              Registrar
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
