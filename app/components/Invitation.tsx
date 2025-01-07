import React from "react";
import { motion } from "framer-motion";

const Invitation = () => {
  return (
    <section
      id="convite"
      className="min-h-screen flex items-center justify-center px-4 bg-[#171717]"
    >
      <motion.div
        className="relative bg-[#efe2c3] text-[#4a3b28] border-4 border-[#4a3b28] rounded-xl w-96 h-40 shadow-md overflow-visible"
        whileHover={{
          y: -12, // Faz o ticket "subir"
          scale: 1.15, // Amplia o ticket levemente
          rotate:-4, // Aplica uma leve rotação
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Aumenta a sombra
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Demarcação com buracos grandes - Esquerda */}
        <div className="absolute -left-4 top-0 bottom-0 flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-5 bg-[#171717] rounded-full"
            />
          ))}
        </div>
        {/* Demarcação com buracos grandes - Direita */}
        <div className="absolute -right-4 top-0 bottom-0 flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-5 bg-[#171717] rounded-full"
            />
          ))}
        </div>

        {/* Corpo do Ticket */}
        <div className="flex w-full h-full">
          {/* Parte esquerda */}
          <div className="flex items-center justify-center w-1/4 border-r-4 border-[#2C2C2C] relative">
            {/* Bolinha no topo sobre a linha divisória */}
            <div className="absolute top-[-6px] right-[-8px] w-3 h-3 bg-[#171717] rounded-full" />
            {/* Bolinha no pé sobre a linha divisória */}
            <div className="absolute bottom-[-6px] right-[-8px] w-3 h-3 bg-[#171717] rounded-full" />
            <p className="rotate-90 text-lg font-bold tracking-wide">
              EXPERIÊNCIA ÚNICA
            </p>
          </div>
          {/* Parte direita */}
          <div className="flex flex-col items-center justify-center w-3/4 px-4 text-center">
            <p className="text-lg font-bold uppercase">Convite Exclusivo</p>
            <p className="text-sm font-semibold">Bar Experience</p>
            <p className="mt-2 text-xs italic font-medium">
              - Uma noite única e inesquecível -
            </p>
            <p className="mt-4 text-xs">
              Válido para <span className="font-bold">02 pessoas</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Invitation;
