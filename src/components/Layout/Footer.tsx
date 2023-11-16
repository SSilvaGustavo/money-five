"use client";

import Image from "next/image";
import { TextStyle } from "./TextStyle";
import logo from "@/assets/logoWhite.svg";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-16 pt-8 pb-4 px-32 bg-secondary-300">
      <div className="flex w-full justify-between cursor-pointer">
        <div className="flex flex-col gap-8">
          <TextStyle.Title title="Contato"/>
          <div className="flex items-center gap-2 text-white">
            <FaPhone/>
            <TextStyle.Paragraph className="hover:text-white transition-colors">(11) 99999-9999</TextStyle.Paragraph>
          </div>
          <div className="flex items-center gap-2 text-white">
          <FaEnvelope />
          <TextStyle.Paragraph className="hover:text-white transition-colors">Invest@AtlasLPS.com</TextStyle.Paragraph>
          </div>
          <div className="flex items-center gap-2 text-white">
          <FaLocationDot />
          <TextStyle.Paragraph className="hover:text-white transition-colors">
            501 West Broadway, Suite 800, San Diego, CA 92101
          </TextStyle.Paragraph>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <TextStyle.Title title="Links" />
          <TextStyle.Paragraph className="hover:text-white transition-colors">FAQ's</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors">Divulgações</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors">Política de privacidade</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors">Mídias</TextStyle.Paragraph>
          <TextStyle.Paragraph className="hover:text-white transition-colors">Atualizações</TextStyle.Paragraph>
        </div>
        <div className="flex flex-col w-[30%] gap-2">
          <TextStyle.Title title="Termos de serviço" />
          <TextStyle.Paragraph>
            A Money Five fornece informações e análises relacionadas a
            investimentos e notícias financeiras com o objetivo de educar e
            informar nossos leitores. No entanto, é crucial observar que todas
            as informações contidas neste site são fornecidas apenas para fins
            informativos e não constituem aconselhamento financeiro, jurídico ou
            de qualquer outra natureza.
          </TextStyle.Paragraph>
        </div>
      </div>
      <div className="flex gap-8 justify-center items-center text-white">
        <Image src={logo} alt="" className="w-40" />
        <p className="font-normal">
          MONEY FIVE 2023 @ Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
