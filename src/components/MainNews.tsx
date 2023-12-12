import Image, { StaticImageData } from "next/image";

import mainImga from "@/assets/news/news-main.jpg";
import mainImg2 from "@/assets/news/news-sec1.jpg";
import mainImg3 from "@/assets/news/news-sec2.jpg";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function MainNews() {
  const { isMobile } = useContext(AppContext);

  return (
    <div className="flex max-lg:flex-col items-center justify-center lg:gap-16 lg:px-4">
      <div className="max-lg:p-4 relative">
        <Image
          src={mainImga}
          alt=""
          className="rounded-lg lg:w-[45rem] lg:aspect-square"
        />
        <div className="absolute top-[50%] left-[10%] text-zinc-300 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black font-bold [text-wrap:pretty] hover:text-white transition-colors">
          <p className="text-xl lg:text-4xl mb-12">
            Sem dólar, Argentina poderia ter crise de liquidez e recessão com
            eventual dolarização, diz ex-Febraban
          </p>
          {!isMobile && (
            <span>
              O ex-economista-chefe da Febraban, Roberto Troster, alertou que a
              proposta do presidente eleito da Argentina, Javier Milei, de
              dolarizar a economia sem garantir reservas suficientes de dólares
              pode levar o país à recessão. Troster enfatizou a falta de
              condições técnicas para a implementação imediata dessa medida.
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:gap-12">
        <div className="max-lg:p-4 relative cursor-pointer">
          <Image alt={""} src={mainImg2} className="rounded-lg lg:w-[500px]" />
          <div className="absolute w-[65%] top-[40%] left-[10%] text-zinc-300 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black [text-wrap:pretty] hover:text-white transition-colors">
            <p className="max-lg:text-2xl lg:mb-8 font-bold">
              Ibovespa opera na máxima em mais de 2 anos; dólar fecha em queda,
              a R$ 4,85
            </p>
            {!isMobile && (
              <span className="">
                Dólar registrou queda de 1,09%, fechando a sessão a R$ 4,852 na
                venda, marcando a maior baixa diária desde 3 de novembro.
              </span>
            )}
          </div>
        </div>
        <div className="max-lg:p-4 relative cursor-pointer">
          <Image alt={""} src={mainImg3} className="rounded-lg lg:w-[500px]" />
          <div className="absolute w-[65%] top-[40%] left-[10%] text-zinc-300 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black [text-wrap:pretty] hover:text-white transition-colors">
            <p className="max-lg:text-2xl lg:mb-10 font-bold">
              A discussão sobre a taxação de compras de até US$ 50 volta à
              agenda.
            </p>
            {!isMobile && (
              <span className="">
                Um projeto de lei que revoga a isenção para compras
                internacionais abaixo de US$ 50 pode avançar no Congresso ainda
                neste ano.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
