"use client";

import Image from "next/image";

import aboutImg from "@/assets/about/about-img.svg";
import aboutP1 from "@/assets/about/about-p1.svg";
import aboutP2 from "@/assets/about/about-p2.svg";
import { TextStyle } from "@/components/Layout/TextStyle";
import { FaSquareFull } from "react-icons/fa6";
import { useContext, useState } from "react";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";

export default function Sobre() {
  const [show, setShow] = useState(false);
  const { isMobile } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex justify-center items-center gap-4 text-zinc-200 w-full 2xl:w-[1440px] p-4 bg-primary-100 mt-24">
        <TextStyle.Heading
          title="Sobre Nós"
          className="!text-zinc-200 max-lg:text-2xl"
        />
        <FaSquareFull />
      </div>
      <div className="flex max-lg:flex-col justify-center items-center px-5 w-full max-lg:gap-8">
        <div className="space-y-8 lg:w-[42rem]">
          <h1 className="font-bold text-2xl lg:text-3xl">
            Conheça a <span className="text-primary-100">Money Five</span>:
            Desvendando o Futuro Através da Visualização de Dados
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Descubra o poder oculto nos números com a Money Five. Líderes na
            criação e desenvolvimento de dashboards personalizados, nossa missão
            é desvendar insights estratégicos e proporcionar uma visão clara por
            meio da visualização de dados. Junte-se a nós na jornada de
            transformar informações em ação, impulsionando o seu negócio para o
            sucesso.
          </p>
          <Link
            href={"#sobre"}
            className="block text-center lg:w-40 bg-primary-100 py-2 px-4 text-sm rounded-md text-white font-semibold hover:scale-105 transition-all"
            onClick={() => setShow(!show)}
          >
            Saiba mais
          </Link>
        </div>
        <div className="">
          <Image src={aboutImg} alt="" width={700} />
        </div>
      </div>
      <div
        id="sobre"
        className="flex flex-col justify-center items-center w-full px-5"
      >
        <div className="flex max-lg:flex-col justify-evenly items-center w-full max-lg:gap-8">
          <div className="max-lg:order-2">
            <Image src={aboutP1} alt="" width={500} />
          </div>
          <div className="lg:w-[42rem] max-lg:order-1">
            <p className="text-gray-500 font-medium">
              Bem-vindo à Money Five, uma empresa inovadora fundada em 2023 no
              Brasil, com a missão de transformar dados em insights
              estratégicos. Especializados na criação e desenvolvimento de
              dashboards personalizados, estamos comprometidos em impulsionar a
              visão estratégica e a visualização de dados para empresas de todos
              os setores. Na era da informação, reconhecemos a importância de
              tomar decisões embasadas em dados precisos e relevantes. Nossa
              equipe apaixonada e experiente está aqui para colaborar com sua
              empresa, criando dashboards intuitivos e poderosos que
              proporcionam uma compreensão clara e acionável dos dados que
              impulsionam o seu negócio.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col justify-evenly items-center w-full max-lg:pt-8">
          <div className="lg:w-[38rem]">
            <p className="text-gray-500 font-medium">
              Na Money Five, não somos apenas especialistas em tecnologia; somos
              parceiros dedicados ao seu sucesso. Cada dashboard que
              desenvolvemos é único e personalizado para atender às necessidades
              específicas da sua empresa. Estamos comprometidos em proporcionar
              uma experiência excepcional, ajudando-o a alcançar novos patamares
              de eficiência operacional e tomada de decisão estratégica. Explore
              um novo horizonte de oportunidades com a Money Five. Juntos, vamos
              transformar seus dados em resultados tangíveis e impulsionar seu
              negócio para o futuro.
            </p>
          </div>
          {!isMobile && (
            <div className="">
              <Image src={aboutP2} alt="" width={500} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
