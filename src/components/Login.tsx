"use client";

import logo from "@/assets/logo.svg";
import { Header } from "@/components/Layout/Header";
import Register from "@/components/Register";
import { AppContext } from "@/context/AppContext";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  const [show, setShow] = useState(false);
  const { isRegisterModalOpen, setIsRegisterModalOpen } = useContext(AppContext)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border border-gray-500 rounded-xl px-4 py-8 w-1/4 mx-auto justify-center items-center">
        <div className="">
          <Image src={logo} alt="logo" width={250} />
        </div>
        <p className="text-xl font-bold my-4 text-primary-100">
          Logue na Money Five
        </p>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex w-[80%]">
            <span className="inline-flex items-center px-3 text-sm rounded-e-0 rounded-s-md bg-gray-400 text-white">
              <FaEnvelope className="w-4 h-4 text-secondary-200" />
            </span>
            <input
              type="text"
              className="rounded-none rounded-e-lg text-black font-semibold min-w-0 w-full border border-gray-400 text-sm p-2.5 outline-none focus:border-gray-500"
              placeholder="Email"
            />
          </div>
          <div className="flex relative w-[80%]">
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
          <button className="bg-primary-100/80 font-bold rounded-md text-white block flex-1 min-w-0 w-[80%] text-sm p-2.5 hover:bg-primary-100 transition-colors">
            Login
          </button>
        </div>
        <div className="flex w-[80%] justify-center items-center py-4">
          <span className="h-px bg-gray-400 w-full"></span>
          <span className="px-4 text-gray-700 text-sm">OR</span>
          <span className="h-px bg-gray-400 w-full"></span>
        </div>
        <button
        onClick={() => signIn()}
        className="text-primary-100 p-4 rounded font-semibold text-xl transition-colors"
      >
        Logue com o Google
      </button>
        <span className="cursor-pointer text-sm text-gray-600 hover:text-primary-100 hover:underline transition-colors">
          Esqueceu sua senha?
        </span>
      </div>
      <div className="flex text-sm gap-1 border border-gray-500 rounded-xl px-4 py-8 w-1/4 mx-auto justify-center items-center">
        <Register open={isRegisterModalOpen} setOpen={setIsRegisterModalOpen}/>
      </div>
    </div>
  );
}