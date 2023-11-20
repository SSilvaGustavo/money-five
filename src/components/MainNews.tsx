import Image, { StaticImageData } from "next/image";

import mainImga from '@/assets/news/news-main.jpg'
import mainImg2 from '@/assets/news/news-sec1.jpg'
import mainImg3 from '@/assets/news/news-sec2.jpg'

export default function MainNews() {
  return (
    <div className="flex gap-6 justify-center items-center">
      <div className="w-1/2 relative cursor-pointer">
        <Image alt={""} src={mainImga} className="rounded-lg w-[45rem] aspect-square"/>
        <div className="absolute top-[50%] left-[10%] text-zinc-300 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black font-bold [text-wrap:pretty] hover:text-white transition-colors">
          <p className="text-4xl mb-12">Sem dólar, Argentina poderia ter crise de liquidez e recessão com eventual dolarização, diz ex-Febraban</p>
          <span>O ex-economista-chefe da Febraban, Roberto Troster, alertou que a proposta do presidente eleito da Argentina, Javier Milei, de dolarizar a economia sem garantir reservas suficientes de dólares pode levar o país à recessão. Troster enfatizou a falta de condições técnicas para a implementação imediata dessa medida.</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative p-4 cursor-pointer">
          <Image alt={""} src={mainImg2} className="rounded-lg w-[80%] h-[50%]"/>
          <div className="absolute w-[65%] top-[40%] left-[10%] text-zinc-300 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black [text-wrap:pretty] hover:text-white transition-colors">
            <p className="mb-10 font-bold">Ibovespa opera na máxima em mais de 2 anos; dólar fecha em queda, a R$ 4,85</p>
            <span className="">Dólar registrou queda de 1,09%, fechando a sessão a R$ 4,852 na venda, marcando a maior baixa diária desde 3 de novembro e o menor patamar desde 2 de agosto.</span>
        </div>
        </div>
        <div className="relative p-4 cursor-pointer">
          <Image alt={""} src={mainImg3} className="rounded-lg w-[80%] h-[50%]"/>
          <div className="absolute w-[65%] top-[40%] left-[10%] text-zinc-300 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black [text-wrap:pretty] hover:text-white transition-colors">
            <p className="mb-10 font-bold">A discussão sobre a taxação de compras de até US$ 50 volta à agenda.</p>
            <span className="">Um projeto de lei que revoga a isenção para compras internacionais abaixo de US$ 50 pode avançar no Congresso ainda neste ano.</span>
        </div>
        </div>
      </div>
    </div>
  );
}
