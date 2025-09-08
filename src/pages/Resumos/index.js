import React, { useEffect, useState } from "react";

function Resumos() {
  const [open, setOpen] = useState(false);
  
  return (
    <div style={{ backgroundColor: "#FAF0E6", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen"
        style={{ backgroundColor: "#4169E1" }}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#4169E1]">
          <ul className="space-y-2 font-medium text-white">
            <li>
              <a
                href="/glossario"
                className="flex items-center p-2 rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Glossário</span>
              </a>
            </li>
            <li>
      <div className="flex items-center justify-between w-full">
        {/* Botão principal -> vai para /resumos */}
        <a
          href="/resumos"
          className="flex items-center w-full p-2 text-base rounded-lg hover:bg-blue-700 transition duration-75"
        >
          <span className="ms-3">Resumos</span>
        </a>

        {/* Botão seta -> abre/fecha dropdown */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-blue-700 transition duration-75"
        >
          <svg
            className={`w-3 h-3 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown com cursos */}
      {open && (
        <ul className="py-2 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-blue-700"
            >
              Introdução a CiberSegurança
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-blue-700"
            >
              Introdução a Redes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-blue-700"
            >
              Dispositivos de Rede e Configuração Inicial
            </a>
          </li>
        </ul>
      )}
    </li>
          </ul>
        </div>

      </aside>

      {/* Conteúdo principal */}
      <main className="p-4 sm:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Resumos</h1>

        <h2>Em Construção</h2> 
      </main>
    </div>
  );
}

export default Resumos;