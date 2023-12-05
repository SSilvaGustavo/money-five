import { FaCheck } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";


interface PricingCardProps {
  title: string;
  price: string;
  benefits: string[];
  primary?: boolean;
}

export default function PricingCard({ title, price, benefits, primary }: PricingCardProps) {
  return (
    <div className={`${primary ? 'bg-gradient-to-tr from-primary-100 to-indigo-400' : 'bg-white'} 
    flex flex-col items-center justify-center py-10 px-12 rounded-md shadow-2xl w-[19rem]`}>
      <h2 className={`${primary ? 'text-white' : 'text-black'} text-3xl`}>{title}</h2>
      
      <div className={`${primary ? 'text-white' : 'text-black'} flex items-center mt-6`}>
        <p className="font-bold text-2xl mb-2">R${price}</p>
        <span className="text-sm">/mês</span>
      </div>

      <div className={`${primary ? 'text-white' : 'text-black'} flex flex-col gap-4 items-start text-sm mb-16 mt-6 h-56`}>
        {
          benefits?.map((benefit) => (
            <div className="flex gap-2 items-center">
            <FaCheck />
          <p>{benefit}</p>
          </div>
          ))
        }
      </div>

      <button className={`${primary ? 'bg-white text-primary-100' : 'bg-gradient-to-tr from-primary-100 to-indigo-400 text-white'} py-2 px-4 text-sm rounded-md font-light hover:scale-105 transition-all`}>Escolher Plano</button>
    </div>
  )
}
