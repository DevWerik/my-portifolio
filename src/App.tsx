import React, { useState, useEffect } from "react";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];
  const navLabels: { [key: string]: string } = {
    home: "Início",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
  };

  const skillsIcons = [
    "/svg/HTML5.svg",
    "/svg/CSS3.svg",
    "/svg/JavaScript.svg",
    "/svg/React.svg",
    "/svg/TypeScript.svg",
    "/svg/Node.js.svg",
    "/svg/Tailwind CSS.svg",
    "/svg/Figma.svg",
    "/svg/PostgresSQL.svg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-800/30 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text">
              Dev.Werik
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative capitalize transition-colors duration-300 
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-blue-400 after:transition-all after:duration-300 
              hover:after:w-full 
              ${
                activeSection === item
                  ? "text-blue-400 after:w-full"
                  : "text-white"
              }`}
                >
                  {navLabels[item]}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg flex flex-col items-start 
        transition-all duration-300 ease-in-out overflow-hidden
        ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize w-full text-left p-4 transition-all duration-300 ease-in-out hover:bg-blue-900/50 ${
                activeSection === item ? "text-blue-400" : "text-white"
              } ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${isMenuOpen ? index * 75 : 0}ms` }}
            >
              {navLabels[item]}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {/* HOME */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
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

          <div
            className={`text-center z-10 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r text-white bg-clip-text">
                Werik Anjos
              </span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Veja meus projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center px-8 py-3 cursor-pointer border border-neutral-600 rounded-full"
              >
                Entre em contato
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-12">
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-1 shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                    <img
                      src="/img/werik.jpeg"
                      alt="Foto de Werik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-4xl py-6 font-bold text-center mb-12 text-white">
                    Sobre Mim
                  </h2>
                </div>
              </div>
              <div className="space-y-1 text-center max-w-3xl ">
                <p className="text-lg py-6 text-blue-100 leading-relaxed text-justify">
                  Olá! Eu sou Werik Anjos, tenho 22 anos, sou desenvolvedor
                  FullStack focado em desenvolver soluções tecnológicas de alta
                  qualidade. Tenho como objetivo criar soluções inovadoras e
                  eficientes para ajudar as empresas a alcançarem seus objetivos
                  e aumentar a produtividade de seus colaboradores.
                </p>
                <p className="text-lg text-blue-100 leading-relaxed text-justify">
                  Minha jornada começou com curiosidade sobre como as coisas
                  funcionam na web, e hoje trabalho com as mais modernas
                  tecnologias para transformar ideias em realidade digital.
                </p>

                {/* REVIEW */}
                {/* <div className="flex flex-wrap gap-3 mt-4 justify-center">
                  <span className="px-4 py-2 bg-blue-800/50 rounded-full text-sm">
                    9 meses de experiência
                  </span>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-4 py-2 bg-cyan-800/50 rounded-full text-sm transition-transform hover:scale-105"
                  >
                    Conheça alguns de meus projetos
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="px-4 py-2 bg-blue-700/50 rounded-full text-sm transition-transform hover:scale-105"
                  >
                    Algumas de minhas habilidades
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <div className="py-6 bg-blue-950/50 mt-6 mb-20">
          <div className="max-w-6xl mx-auto ">
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll gap-8">
                {[...skillsIcons, ...skillsIcons].map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="tech logo"
                    className="min-w-10 max-w-10 object-contain hover:scale-110 transition-transform duration-300"
                  />
                ))}
                {[...skillsIcons, ...skillsIcons].map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="tech logo"
                    className="min-w-10 max-w-10 object-contain hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="#" className="py-20 px-4 bg-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-blue-300 uppercase tracking-wider text-sm mb-2">
              Minhas Habilidades
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Criação e Modelagem
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center text-white mb-4">
                  <img
                    src="/svg/Figma.svg"
                    alt="Habilidades"
                    className="w-auto h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Criação e Validação Visual
                </h3>
                <p className="text-blue-100 text-justify">
                  Transforme ideias em projetos funcionais e esteticamente
                  impactantes. Com ferramentas modernas e princípios de UX/UI,
                  desenvolvemos protótipos interativos que permitem testar e
                  refinar cada detalhe antes da implementação técnica.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center text-white mb-4">
                  <img src="./img/responsive.png" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Experiência Adaptável
                </h3>
                <p className="text-blue-100 text-justify">
                  Crio layouts inteligentes que fluem naturalmente entre telas,
                  garantindo usabilidade e elegância em todos os dispositivos –
                  do desktop ao mobile – com grids flexíveis, media queries
                  precisas e componentes que se reinventam em cada contexto.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center text-white mb-4">
                  <img src="./img/api.png" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-2">APIs RESTFul</h3>
                <p className="text-blue-100 text-justify">
                  Tenho experiência na criação e integração de APIs RESTful,
                  desenvolvendo soluções que permitem a comunicação entre
                  diferentes sistemas de forma padronizada, segura e escalável.
                  <p className="text-blue-100 text-justify mt-4">
                    Além disso, realizo integrações que conectam aplicações web
                    e serviços externos, ampliando as funcionalidades do projeto
                    e garantindo maior eficiência na troca de dados.
                  </p>
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center text-white mb-4">
                  <img src="./img/IA.png" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-2">Uso de Prompts de IA</h3>
                <p className="text-blue-100 text-justify">
                  Utilizo essa prática no processo de desenvolvimento para
                  aumentar minha produtividade e otimizar a resolução de
                  problemas. Ao criar comandos claros e objetivos, consigo obter
                  soluções rápidas, gerar ideias criativas e até automatizar
                  tarefas repetitivas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="#" className="py-20 px-4  bg-slate-800 ">
          <div className="max-w-6xl mx-auto text-center ">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Minha Trajetória
              </h2>
              <p className="text-gray-300 mb-12">
                Experiências profissionais e projetos que marcaram minha
                carreira.
              </p>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Portfolio;
