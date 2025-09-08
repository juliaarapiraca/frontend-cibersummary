import { useEffect, useState } from "react";
import api from "../../services/api";

function Glossario() {
  const [rows, setRows] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [paginaAtual, setPaginaAtual] = useState(1);
  const termosPorPagina = 20;

  async function carregarTermos() {
    setLoading(true);
    try {
      const resposta = await api.get("/glossario");
      console.log("Resposta completa da API:", resposta);

      // Ajuste automático caso a API retorne { data: [...] } ou um array direto
      const dados = Array.isArray(resposta.data) ? resposta.data : resposta.data?.data || [];

      // Mapeia os campos para garantir compatibilidade com a tabela
      const termosFormatados = dados.map(item => ({
        termo: item.termo || item.name || "",
        sigla: item.sigla || item.abrev || "",
        significado: item.significado || item.desc || "",
        curso: item.curso || ""
      }));

      setRows(termosFormatados);
      console.log("Termos carregados:", termosFormatados);

    } catch (error) {
      console.error("Erro ao carregar termos:", error);
      setRows([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarTermos();
  }, []);

  // Filtra os termos pelo input
  const termosFiltrados = rows.filter(r =>
    r.termo.toLowerCase().includes(filtro.toLowerCase()) ||
    r.sigla.toLowerCase().includes(filtro.toLowerCase()) ||
    r.significado.toLowerCase().includes(filtro.toLowerCase()) ||
    r.curso.toLowerCase().includes(filtro.toLowerCase())
  );

  // Paginação
  const indexUltimoTermo = paginaAtual * termosPorPagina;
  const indexPrimeiroTermo = indexUltimoTermo - termosPorPagina;
  const termosPagina = termosFiltrados.slice(indexPrimeiroTermo, indexUltimoTermo);
  const totalPaginas = Math.ceil(termosFiltrados.length / termosPorPagina);

  return (
    <div style={{ backgroundColor: "#FAF0E6", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen" style={{ backgroundColor: "#4169E1" }}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#4169E1]">
          <ul className="space-y-2 font-medium text-white">
            <li>
              <a href="/glossario" className="flex items-center p-2 rounded-lg hover:bg-blue-700 group">
                <span className="ms-3">Glossário</span>
              </a>
            </li>
            <li>
              <div className="flex items-center justify-between w-full">
                <a href="/resumos" className="flex items-center w-full p-2 text-base rounded-lg hover:bg-blue-700 transition duration-75">
                  <span className="ms-3">Resumos</span>
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="p-2 rounded-lg hover:bg-blue-700 transition duration-75"
                >
                  <svg
                    className={`w-3 h-3 transform transition-transform ${open ? "rotate-180" : ""}`}
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

              {open && (
                <ul className="py-2 space-y-2">
                  <li>
                    <a href="#" className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-blue-700">
                      Introdução a CiberSegurança
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-blue-700">
                      Introdução a Redes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center w-full p-2 pl-11 rounded-lg hover:bg-blue-700">
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
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Glossário</h1>

        {/* Input de busca */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar termo, sigla, significado ou curso"
            value={filtro}
            onChange={e => {
              setFiltro(e.target.value);
              setPaginaAtual(1); // reinicia na página 1 quando filtra
            }}
            className="w-full p-2 border border-gray-300 rounded"
            disabled={loading}
          />
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {loading ? (
            <p className="text-center text-gray-600 p-4">Carregando termos...</p>
          ) : (
            <>
              <table className="w-full text-sm text-left text-gray-700">
                <thead style={{ backgroundColor: "#4169E1", color: "#fff" }} className="text-xs uppercase">
                  <tr>
                    <th className="px-6 py-3">Termo</th>
                    <th className="px-6 py-3">Sigla</th>
                    <th className="px-6 py-3">Significado</th>
                    <th className="px-6 py-3">Curso</th>
                  </tr>
                </thead>
                <tbody>
                  {termosPagina.map((r, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">{r.termo}</td>
                      <td className="px-6 py-4">{r.sigla}</td>
                      <td className="px-6 py-4">{r.significado}</td>
                      <td className="px-6 py-4">{r.curso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {termosFiltrados.length === 0 && (
                <p className="text-center text-gray-600 p-4">Nenhum termo encontrado</p>
              )}

              {/* Paginação */}
              {termosFiltrados.length > termosPorPagina && (
                <div className="flex justify-center mt-4 space-x-2">
                  <button
                    onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
                    disabled={paginaAtual === 1}
                    className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                  >
                    Anterior
                  </button>
                  <span className="px-3 py-1 bg-gray-200 rounded">{paginaAtual} / {totalPaginas}</span>
                  <button
                    onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
                    disabled={paginaAtual === totalPaginas}
                    className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                  >
                    Próximo
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Glossario;