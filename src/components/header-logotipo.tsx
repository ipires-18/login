import React from "react";
import { LogoTipo } from "../assets/logotipo";

export const HeaderLogoTipo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
        <LogoTipo/>
        <span className="text-white">Capital Planner</span>    
    </div>
  )
}