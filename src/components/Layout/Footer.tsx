"use client";

import Image from "next/image";
import { TextStyle } from "./TextStyle";
import logo from "@/assets/logoWhite.svg";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Footer() {
  const { isMobile } = useContext(AppContext)

  return (
    <footer className="relative bottom-0 w-full flex flex-col gap-6 pt-8 pb-5 px-4 lg:px-32 mt-8 bg-secondary-300">
      <div className="flex w-full justify-between cursor-pointer">
        <div className="flex flex-col gap-8 max-lg:w-1/2">
          <TextStyle.Title title="Contato"/>
          <div className="flex items-center gap-2 text-white">
            <FaPhone/>
            <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">(11) 99999-9999</TextStyle.Paragraph>
          </div>
          <div className="flex items-center gap-2 text-white">
          <FaEnvelope />
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">contato@moneyfive.com</TextStyle.Paragraph>
          </div>
          <div className="flex items-center gap-2 text-white">
          <FaLocationDot />
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">
          Av. Eng. Eusébio Stevaux, 823 - Santo Amaro, São Paulo - SP, 04696-000
          </TextStyle.Paragraph>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <TextStyle.Title title="Links"/>
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">FAQ's</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">Divulgações</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">Política de privacidade</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">Mídias</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors text-sm">Atualizações</TextStyle.Paragraph>
        </div>
        {
          !isMobile && 
          <div className="flex flex-col w-[30%] gap-2">
          <TextStyle.Title title="Termos de serviço" />
          <TextStyle.Paragraph className="text-sm">
            A Money Five fornece informações e análises relacionadas a
            investimentos e notícias financeiras com o objetivo de educar e
            informar nossos leitores. No entanto, é crucial observar que todas
            as informações contidas neste site são fornecidas apenas para fins
            informativos e não constituem aconselhamento financeiro, jurídico ou
            de qualquer outra natureza.
          </TextStyle.Paragraph>
        </div>
        }
      </div>
      <div className="flex gap-8 justify-center items-center text-white">
        <Image src={logo} alt="" className="w-28" />
        <p className="font-medium text-center max-lg:text-sm">
          MONEY FIVE 2023 @ Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
