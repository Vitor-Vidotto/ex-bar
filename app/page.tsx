'use client';
import AboutSection from "./components/AboutSection";
import ContatoSection from "./components/ContatoSection";
import DrinksSection from "./components/DrinksSection";
import Invitation from "./components/Invitation";
import FrontPage from "./components/FrontPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">


      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center w-full">
        <FrontPage />
      <div className="container  mx-auto px-12 py-4">
        <AboutSection />
        <DrinksSection />
        <Invitation />
        <ContatoSection />
      </div>
      </div>
    </main>
  );
}
