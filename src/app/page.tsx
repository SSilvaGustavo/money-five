import Image from "next/image";

import homeDash from "@/assets/home-dash.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-20 px-4 py-20 lg:py-32 max-lg:flex-col">
      <div className="flex flex-col gap-8 lg:w-1/2">
        <div className="flex items-center gap-3 max-lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md px-2 py-3 w-16">
              <p className="text-2xl font-semibold">06</p>
              <span className="text-sm font-medium">Meses</span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center bg-gray-200 rounded-md px-2 py-3 w-16">
              <p className="text-2xl font-semibold">25</p>
              <span className="text-sm font-medium">Dias</span>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center bg-gray-200 rounded-md px-2 py-3 w-16">
              <p className="text-2xl font-semibold">12</p>
              <span className="text-sm font-medium">Horas</span>
            </div>
          </div>
          <p className="text-xl text-primary-100 font-semibold">Restantes</p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold 2xl:text-4xl">
            Transformando dados em decisões, sua visão estratégica começa aqui
          </h2>
          <p className="text-base text-gray-600 2xl:text-xl">
            Explore nossos Dashboards: Uma coleção diversificada de insights
            poderosos e visuais impactantes para impulsionar sua tomada de
            decisão.
          </p>
          <div className="flex gap-4 max-lg:flex-col">
            <Link
              href={"/prices"}
              className="text-center bg-primary-100 py-2 px-4 text-sm rounded-md text-white font-semibold hover:scale-105 transition-all"
            >
              Assinar um plano
            </Link>
            <Link
              href={"/sobre"}
              className="text-center border border-primary-100 py-2 px-4 text-sm rounded-md text-primary-100 font-semibold hover:scale-105 transition-all"
            >
              Conheça mais sobre o projeto
            </Link>
          </div>
        </div>
      </div>

      <Link
        className="lg:w-1/2 order-1 hover:scale-105 transition-all"
        href={"/dashboards"}
      >
        <Image
          src={homeDash}
          alt=""
          className="rounded-lg shadow-lg"
          width={640}
        />
      </Link>
    </div>
  );
}
