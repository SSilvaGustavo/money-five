"use client"

import SubNews from "@/components/SubNews";
import MainNews from "@/components/MainNews";
import { FaAngleDown, FaAngleUp, FaSquareFull  } from "react-icons/fa6";

import news from "@/assets/news/news-1.jpg";
import news2 from "@/assets/news/news-2.jpg";
import news3 from "@/assets/news/news-3.jpg";
import news4 from "@/assets/news/news-4.jpg";
import news5 from "@/assets/news/news-5.jpg";
import news6 from "@/assets/news/news-6.jpg";
import { useState } from "react";
import { TextStyle } from "@/components/Layout/TextStyle";

export default function Noticias() {
  const [show, setShow] = useState(false);
  console.log(show)

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <MainNews />
      <div className="flex items-center gap-4 text-primary-100">
      <TextStyle.Heading title="Demais noticias" className="text-primary-100"/>
      <FaSquareFull />
      </div>
      <SubNews
        title="Confira as Top 5 Ações Recomendadas para Investir em Novembro"
        text="Pelo quarto mês consecutivo, a Vale é a empresa mais recomendada para investir em novembro, de acordo com pesquisa da CNN com oito instituições financeiras. Os analistas observam uma tendência de afastamento de alocações de longo prazo nas ações brasileiras devido à volatilidade nos mercados globais e incertezas sobre as taxas de juros nos EUA."
        image={news5}
        date="22/11/2023"
      />

      <SubNews
        title="Desafios Econômicos na China: Cenário para Investidores é o Mais Complexo em 25 Anos"
        text="A China enfrenta desafios econômicos, registrando seu primeiro índice negativo de Investimento Direto Estrangeiro (IDE) desde 1998, indicando dificuldades em atrair empresas e capital estrangeiro. No terceiro trimestre de 2023, o passivo de IDE atingiu US$ 11,8 bilhões negativos, uma queda em relação ao mesmo período em 2022."
        image={news}
        date="15/11/2023"
      />
      <SubNews
        title="Explorando Fundos de Investimento Impulsionados por Algoritmos e Inteligência Artificial"
        text="A inteligência artificial (IA) está cada vez mais presente nas decisões financeiras, notavelmente nos fundos quantitativos. Esses produtos utilizam a tecnologia para apoiar analistas ou até mesmo operar de forma autônoma. O uso crescente de IA no mercado financeiro destaca seu papel significativo nas tomadas de decisões de investimentos."
        image={news3}
        date="09/11/2023"
      />
      <div className="flex items-center gap-2 cursor-pointer text-primary-100 font-bold hover:scale-105 transition-all" onClick={() => setShow(!show)}>
        <p>{!show ? "Ver mais" : "Ver menos"}</p>
        {
          !show ? <FaAngleDown /> : <FaAngleUp />
        }
        
      </div>
      {
        show && 
        <div className={`flex flex-col justify-center items-center gap-8`}>
        <SubNews
          title="Projeções de Rendimento: R$ 1.000 na Poupança, Tesouro Direto e CDB com Selic a 12,25%"
          text="Investindo R$ 1.000, a projeção mostra que em seis meses o montante subirá para R$ 1.050,51, alcançando R$ 1.308,66 em 30 meses. Os ganhos, já descontando o imposto de renda, são apresentados para poupança, Tesouro Direto (Tesouro Selic), CDBs e fundos DI. A poupança é isenta de impostos, enquanto as simulações incluem taxas de administração de 0,50% para fundos DI e 0,2% para Tesouro Selic, com variações entre instituições."
          image={news2}
          date="01/11/2023"
          rtl
        />

        <SubNews
          title="A Arábia Saudita projeta investir mais de US$ 38 bilhões para expandir sua presença no mercado de jogos"
          text="O governo saudita planeja investir cerca de US$ 38,6 bilhões na indústria de videogames, reforçando sua presença ao adquirir participação na Nintendo e ações da EA e Take-Two. A Savvy Games Group, subsidiária do Fundo de Investimento Público saudita, pretende colaborar com essas empresas para expandir distribuição, gestão de e-sports e desenvolver novas propriedades intelectuais."
          image={news4}
          date="28/10/2023"
          rtl
        />
        <SubNews
          title="Economistas aconselham que investidores não alterem estratégias devido à situação de guerra em Israel"
          text="O mercado monitora os desdobramentos da guerra em Israel, com especial atenção aos possíveis impactos na economia global e brasileira. Após os ataques do Hamas, o preço do petróleo inicialmente subiu mais de 4%, mas nos dias seguintes apresentou ligeiras quedas. O economista-chefe da Ágora Investimento, Dalton Gardimam, destaca a complexidade do cenário geopolítico, sugerindo cautela nas conclusões devido à incerteza."
          image={news6}
          date="17/10/2023"
          rtl
        />
      </div>
      }
    </div>
  );
}
