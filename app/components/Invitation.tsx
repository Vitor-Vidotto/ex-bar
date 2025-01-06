import React from "react";
import { motion } from "framer-motion";

const Invitation = () => {
  return (
    <section
      id="convite"
      className="min-h-screen flex items-center justify-center px-4 bg-[#121212]"
    >
      <motion.div
        className="relative bg-[#2C2C2C] text-white p-8 rounded-lg shadow-lg max-w-xl mx-auto flex items-center justify-center"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #333333)",
          borderRadius: "12px",
        }}
        whileHover={{
          y: -10, // Faz o ticket "subir" suavemente para dar a sensação de destaque
          scale: 1.05,
          rotate: 2,
          boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)", // A sombra também aumenta para criar o efeito de destaque
          transition: { type: "spring", stiffness: 100, damping: 25 },
        }}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4e4e4e] to-[#2b2b2b] rounded-lg opacity-20"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Adquira um Convite</h2>
          <p className="text-lg">Venha viver a experiência única que só o nosso bar exclusivo pode oferecer.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Invitation;
