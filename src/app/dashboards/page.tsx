"use client";

import { DashboardCard } from "@/components/DashboardCard";
import { TextStyle } from "@/components/Layout/TextStyle";
import { useEffect, useState } from "react";
import { FaSquareFull } from "react-icons/fa6";

export default function Dashboards() {
  const [selectedCategory, setSelectedCategory] = useState("vendas");

  const buttons = [
    "Vendas",
    "Analíticos",
    "Demográficos",
    "Informativos",
    "Outros",
  ];

  useEffect(() => {}, []);

  const handleButtonClick = (category: string) => {
    setSelectedCategory(category);
  };

  console.log(selectedCategory);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-2 w-full p-4 bg-primary-100">
        <div className="flex items-center gap-4 text-zinc-200">
          <TextStyle.Heading title="Central de Dashboards" className="!text-zinc-200"/>
          <FaSquareFull />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <iframe
          className="rounded-xl"
          title="PI"
          width="1250"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=fcf95151-50f7-47d2-8ad3-a5d8903b4c2b&autoAuth=true&ctid=6f9e3b1e-1809-444a-81d3-82d40a928812&filterPaneEnabled=false&navContentPaneEnabled=false"
          frameBorder="0"
          allowFullScreen={true}
          id=""
        ></iframe>
      </div>
      <div className="flex items-center justify-center gap-4 mt-12">
        {buttons.map((name) => (
          <button
            className={`px-4 py-2 text-white rounded-xl font-semibold hover:scale-95 transition-all ${
              selectedCategory === name.toLowerCase()
                ? "bg-gray-700 scale-95"
                : "bg-secondary-100"
            }`}
            onClick={() => handleButtonClick(name.toLowerCase())}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 w-full justify-items-center gap-y-12">
        {selectedCategory === "vendas" ? (
          <>
            <DashboardCard.Free
              id="vendas"
              src="https://app.powerbi.com/view?r=eyJrIjoiZTA0M2FiZGMtNDYwNC00ZmJiLWIwOTMtODgyNzc5ZDEwNmM3IiwidCI6Ijc0MzBjOGJlLWQ1ZTMtNDgxYi1hNTcwLTZjOGI0MzRkZGY4OCIsImMiOjZ9"
            />
            <DashboardCard.Free
              id="vendas"
              src="https://app.powerbi.com/view?r=eyJrIjoiYTg2NjBlNzYtNmY0MC00MjRmLWE2NzUtMzUyZjJmMGNkYzg3IiwidCI6IjgxNzdmMWQzLWU2NTAtNDAxNS1iNzdhLTY4MjUxODQwMzRiNyJ9&"
            />
            <DashboardCard.Lock
              id="vendas"
              src="https://app.powerbi.com/view?r=eyJrIjoiNTc2OTIxNWMtNDNkNS00OTY1LWE1ZjMtNjZkYmU0MWU5MjNkIiwidCI6IjgxNzdmMWQzLWU2NTAtNDAxNS1iNzdhLTY4MjUxODQwMzRiNyJ9&"
            />
            <DashboardCard.Lock
              id="vendas"
              src="https://app.powerbi.com/view?r=eyJrIjoiMGEyNmE5MzQtMTUxOS00YmQzLWFkOTMtYWUwYmNiMWIzNmRmIiwidCI6IjdhNTNiMjZhLTI1YTUtNGNiYS05NGM4LTM4ZWFlMWY3MzVjYSJ9"
            />
          </>
        ) : selectedCategory === "analíticos" ? (
          <>
            <DashboardCard.Free
              id="analíticos"
              src="https://app.powerbi.com/view?r=eyJrIjoiYjc5ZTlhZmMtYjQ5ZC00MWU4LWEyMzAtZWVjNTllODZlOTc5IiwidCI6Ijc0MzBjOGJlLWQ1ZTMtNDgxYi1hNTcwLTZjOGI0MzRkZGY4OCIsImMiOjZ9"
            />
            <DashboardCard.Lock
              id="analíticos"
              src="https://app.powerbi.com/view?r=eyJrIjoiMjkyYjM1MDktNjgyMS00Mzc3LWJmZTEtOTIxM2RjMGEwMWVmIiwidCI6Ijc0MzBjOGJlLWQ1ZTMtNDgxYi1hNTcwLTZjOGI0MzRkZGY4OCIsImMiOjZ9"
            />
            <DashboardCard.Lock
              id="analíticos"
              src="https://app.powerbi.com/view?r=eyJrIjoiMWM4Y2NkMmQtNDk3Ni00ZTA5LWJiYjAtZTBjOWZjNTRhOWFiIiwidCI6Ijc0MzBjOGJlLWQ1ZTMtNDgxYi1hNTcwLTZjOGI0MzRkZGY4OCIsImMiOjZ9"
            />
            <DashboardCard.Lock
              id="analíticos"
              src="https://app.powerbi.com/view?r=eyJrIjoiODlkMDFlMDUtY2I3Yi00ODc4LTg4YzEtMGUyN2Y4MTA0NGY1IiwidCI6Ijc0MzBjOGJlLWQ1ZTMtNDgxYi1hNTcwLTZjOGI0MzRkZGY4OCIsImMiOjZ9"
            />
          </>
        ) : selectedCategory === "demográficos" ? (
          <>
            <DashboardCard.Free
              id="demográficos"
              src="https://app.powerbi.com/view?r=eyJrIjoiOTkxMmRkZjUtMjgxNy00OGNkLTk3OTAtYjRmZTUyY2ZlY2ZiIiwidCI6IjNhNGE4ZjI4LWI3Y2MtNDNiYy1iZTBjLWQ2NTFiZTMyNmEwMyIsImMiOjh9&"
            />
            <DashboardCard.Free
              id="demográficos"
              src="https://app.powerbi.com/view?r=eyJrIjoiYWMwNmI1ZmMtZGYwYS00ODljLWE4NzgtNzM1OGRkYWQzMWMxIiwidCI6IjZiZTgxZjIwLWFlY2MtNGQyZC1hMTM0LWJmZWJlOTAxODE4NCIsImMiOjl9"
            />
            <DashboardCard.Lock
              id="demográficos"
              src="https://app.powerbi.com/view?r=eyJrIjoiYjA1YzhhMjItMWU1ZS00YmRiLWI3MjUtZDVhN2ZlMzY4NjFlIiwidCI6IjJjOTJmZjI0LWI0MmMtNDgwZC1iNzRkLTY2ZmNlNzZiZDdkYSIsImMiOjl9"
            />
            <DashboardCard.Lock
              id="demográficos"
              src="https://app.powerbi.com/view?r=eyJrIjoiMmYwZDIwYmYtNjhlNy00ZjIxLWE3NjQtMzI1MjUxYzk3NmY0IiwidCI6IjJlZjQ4Zjc4LTQyNWUtNGMwZS04ZTU1LWExNzk1Mzk2OTVjYiIsImMiOjF9"
            />
          </>
        ) : selectedCategory === "informativos" ? (
          <>
            <DashboardCard.Free
              id="informativos"
              src="https://app.powerbi.com/view?r=eyJrIjoiZWI5ZDRkYmItM2FlNS00YTQzLWFhYjMtNDVlMzA4ZWNkMjZlIiwidCI6IjM2NDBmODA2LTgzZTUtNDkwMi05NTZiLTZjOWFkODU2OTE3OCJ9&"
            />
            <DashboardCard.Lock
              id="informativos"
              src="https://app.powerbi.com/view?r=eyJrIjoiNDViYWQwMjItYWQzYS00YWJiLTg4OTItZDM5NzMwMjFmNTBjIiwidCI6Ijc3MWU5NjA5LTQ2YTItNDY1ZS04YWQ2LWIwZWZlMTYxMzNlOSJ9"
            />
          </>
        ) : (
          selectedCategory === "outros" && (
            <>
              <DashboardCard.Free
                id="informativos"
                src="https://app.powerbi.com/view?r=eyJrIjoiZTczNjkwZGEtNzg1MS00ODc2LWJkYjYtNjM2ZDRlYjljMWU0IiwidCI6IjNlYzFlMTBkLWM2MWQtNDI3NS05NDY0LTMyOTczZDJiMTkyMSJ9"
              />
              <DashboardCard.Lock
                id="informativos"
                src="https://app.powerbi.com/view?r=eyJrIjoiZmE1ODVmOWQtYzg3NC00NDY2LWEzNGEtOWVlZjY3ZWY4ZmVmIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
              />
            </>
          )
        )}
      </div>
    </div>
  );
}
