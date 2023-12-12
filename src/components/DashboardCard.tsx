import Link from "next/link";
import { FaLock } from "react-icons/fa6";

interface DashboardCardProps {
  id: string;
  src: string;
}

function CardFree({ id, src }: DashboardCardProps) {
  return (
    <>
      <iframe
        className="rounded-xl shadow-2xl 2xl:w-full xl:w-[80%] xl:h-[400px] w-[350px] h-[200px]"
        id={id}
        src={src}
        title="PI"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </>
  )
}

function CardLock({ id, src }: DashboardCardProps) {
  return (
    <div className="relative 2xl:w-full xl:w-[80%]">
      <Link href={"/prices"} className="flex flex-col cursor-pointer">
        <FaLock className="text-gray-700 text-5xl absolute top-[35%] left-[45%] z-10"/>
        <p className="text-secondary-300 text-center font-bold absolute top-[60%] left-[8%] lg:top-[50%] lg:left-[25%] z-10">Disponível apenas no plano <span className="text-primary-100">Premium +</span></p>
      </Link>
      <div className="relative blur pointer-events-none">
      <iframe
        className="rounded-xl shadow-2xl lg:w-full lg:h-[400px] w-[350px] h-[200px]"
        id={id}
        src={src}
        title="PI"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
      </div>
    </div>
  )
}

export const DashboardCard = {
  Free: CardFree,
  Lock: CardLock,
}