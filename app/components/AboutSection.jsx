'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "História",
    id: "history",
    content: (
      <ul className="list-disc pl-2 text-white history-list">
        <li>Abertura em 2015, com o objetivo de oferecer uma experiência única e aconchegante.</li>
        <li>Inspirado na era dourada dos bares clássicos, mas com um toque moderno e inovador.</li>
        <li>Com um cardápio diversificado de drinks e petiscos que agradam a todos os gostos.</li>
        <li>O Velvet Key é mais que um bar, é um lugar onde as pessoas se conectam, se divertem e compartilham histórias.</li>
      </ul>
    ),
  },
  {
    title: "Ambiente",
    id: "environment",
    content: (
      <ul className="list-disc pl-2 text-white environment-list">
        <li>Decoração sofisticada com iluminação suave e detalhes em veludo, criando uma atmosfera intimista.</li>
        <li>Música ambiente que vai do jazz ao indie, criando o clima perfeito para qualquer hora do dia.</li>
        <li>Espaços aconchegantes e confortáveis, ideais para encontros casuais ou celebrações especiais.</li>
      </ul>
    ),
  },
  {
    title: "Atrações",
    id: "attractions",
    content: (
      <ul className="list-disc pl-2 text-white attractions-list">
        <li>Noite de karaoke toda sexta-feira, onde os clientes podem mostrar seus talentos.</li>
        <li>Eventos temáticos e lançamentos de drinks exclusivos, sempre com algo novo para experimentar.</li>
        <li>Show ao vivo de bandas locais, trazendo o melhor da música para o bar.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("history");
  const [isVisible, setIsVisible] = useState(false); // Controla se a seção está visível na tela
  const [isItemVisible, setIsItemVisible] = useState(false); // Controla a animação dos itens

  // Função que verifica se a seção está visível na tela
  const handleScroll = () => {
    const section = document.getElementById("quem-somos");
    const rect = section?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight * 0.7) {
      setIsVisible(true); // Ativa a visibilidade da seção quando ela entra na tela
    }
  };

  // Detecta quando a seção se torna visível
  useEffect(() => {
    // Detecta o evento de rolagem
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Limpa o listener ao desmontar o componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ativar a animação dos itens após a seção ficar visível
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsItemVisible(true); // Ativar a visibilidade dos itens
      }, 600); // Delay para a animação dos itens
    }
  }, [isVisible]);

  return (
    <section
      id="quem-somos"
      className={`text-white transition-opacity duration-700 ${isVisible ? "opacity-100 pt-16" : "opacity-0 pt-0"}`}

    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/5.png" width={500} height={500} alt="The Velvet Key Bar" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Quem Somos</h2>
          <p className="text-base lg:text-lg text-white">
            O *The Velvet Key* é um bar sofisticado, onde as pessoas vêm para escapar do cotidiano e se conectar em um ambiente acolhedor e elegante. Desde a sua abertura, temos o compromisso de oferecer uma experiência única, seja por meio de nossos drinks exclusivos ou pelo ambiente acolhedor que conquistou corações.
          </p>
          <br />
          <p className="text-base lg:text-lg text-white">
            Venha conhecer o *The Velvet Key*, onde cada noite se transforma em uma memória especial.
          </p>
          <div className="mt-8">
            {/* Aqui os itens da lista só ficam visíveis se isItemVisible for verdadeiro */}
            <ul className="list-disc pl-2 text-white">
              {TAB_DATA.find((t) => t.id === tab).content.props.children.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    isItemVisible
                      ? "opacity-100 translate-x-0" // Quando visível, anima de volta à posição normal
                      : "opacity-0 translate-x-10" // Quando não visível, fica fora da tela
                  } transition-all duration-500 ease-out`}
                  style={{
                    transitionDelay: `${index * 100}ms`, // Delay para animar um item por vez
                    transform: isItemVisible ? "translateX(0)" : "translateX(20px)",
                    opacity: isItemVisible ? "1" : "0",
                  }} // Adiciona transformação suave e opacidade
                >
                  {item.props.children}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
