import Image, { StaticImageData } from "next/image";
import { FaRegClock } from "react-icons/fa6";

interface SubNewsProps {
  title: string;
  text: string;
  image: StaticImageData;
  date: string;
  rtl?: boolean;
  className?: string;
}

export default function SubNews({
  title,
  text,
  image,
  date,
  rtl,
  className,
}: SubNewsProps) {
  return (
    <div
      className={`flex justify-around items-center rounded-lg w-[60%] py-4 cursor-pointer shadow-black hover:shadow-xl hover:scale-105 transition-all duration-300 ${
        rtl && "flex-row-reverse"
      } ${className}`}
    >
      <Image alt={title} src={image} width={320} className="rounded-lg" />
      <div className="w-1/2">
        <h2 className="font-bold text-xl mb-6 [text-wrap:pretty]">{title}</h2>
        <p className="text-sm [text-wrap:pretty]">{text}</p>
        <div className="flex items-center gap-2 mt-4 text-zinc-700 text-sm">
          <FaRegClock />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
