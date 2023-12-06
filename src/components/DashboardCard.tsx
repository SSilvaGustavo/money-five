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
        className="rounded-xl shadow-2xl"
        id={id}
        src={src}
        title="PI"
        width="700"
        height="400"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </>
  )
}

function CardLock({ id, src }: DashboardCardProps) {
  return (
    <div className="relative">
      <Link href={"/prices"} className="flex flex-col cursor-pointer">
        <FaLock className="text-gray-700 text-5xl absolute top-[35%] left-[45%] z-10"/>
        <p className="text-secondary-300 text-center font-bold absolute top-[50%] left-[25%] z-10">Disponível apenas no plano <span className="text-primary-100">Premium +</span></p>
      </Link>
      <div className="relative blur  pointer-events-none">
      <iframe
        className="rounded-xl shadow-2xl"
        id={id}
        src={src}
        title="PI"
        width="700"
        height="400"
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