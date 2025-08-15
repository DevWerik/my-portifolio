import React, { useState, useEffect } from "react";

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-800/30 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text">
              DevWerik
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                      activeSection === item ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {item === "about"
                      ? "Sobre"
                      : item === "skills"
                      ? "Habilidades"
                      : item === "projects"
                      ? "Projetos"
                      : item === "contact"
                      ? "Contato"
                      : "Início"}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Fundo animado */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo principal */}
        <div
          className={`text-center z-10 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Título */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r text-white bg-clip-text">
              Werik Santos
            </span>
          </h1>

          {/* Container de botões */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button
              onClick={() => scrollToSection("")}
              className="inline-flex items-center px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Veja meus projetos
              <div className="ml-2 w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={() => scrollToSection("")}
              className="inline-flex items-center px-8 py-3 cursor-pointer border border-neutral-600 rounded-full"
            >
              Entre em contato
              <div className="ml-2 w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                  <img
                    src="./public/werik.jpeg"
                    alt="Foto de Werik"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-4xl top-3 font-bold text-center mb-12 text-white">
                  Werik Anjos
                </h2>
              </div>
            </div>

            {/* Texto vem depois */}
            <div className="order-2 md:order-2 space-y-6">
              <p className="text-lg text-blue-100 leading-relaxed">
                Olá! Eu sou Werik Anjos, tenho 22 anos, sou desenvolvedor
                FullStack focado em desenvolver soluções tecnológicas de alta
                qualidade. Tenho como objetivo criar soluções inovadoras e
                eficientes para ajudar as empresas a alcançarem seus objetivos e
                aumentar a produtividade de seus colaboradores.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas
                funcionam na web, e hoje trabalho com as mais modernas
                tecnologias para transformar ideias em realidade digital.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-800/50 rounded-full text-sm">
                  9 meses de experiência
                </span>
                <a
                  href="#projects"
                  className="px-4 py-2 bg-cyan-800/50 rounded-full text-sm"
                >
                  conheça alguns de meus projetos
                </a>
                <span className="px-4 py-2 bg-blue-700/50 rounded-full text-sm">
                  Algumas de minhas habilidades
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
