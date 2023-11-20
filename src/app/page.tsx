"use client"

import { ReactNode, useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const { isMobileHeaderOpen } = useContext(AppContext);

  return (
    <main className={`max-w-[1440px] mx-auto flex flex-col justify-center items-center ${
      isMobileHeaderOpen ? "blur-md" : ""
    }`}>
      <iframe title="PI" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=fcf95151-50f7-47d2-8ad3-a5d8903b4c2b&autoAuth=true&ctid=6f9e3b1e-1809-444a-81d3-82d40a928812" frameBorder="0" allowFullScreen={true}></iframe>
    </main>
  )
}
