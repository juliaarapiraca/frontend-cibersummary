function Jumbo() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `
          url('https://cdn.prod.website-files.com/63d1a5a9942f2dde32a8eb08/63dd757e17236498e99aa734_62d985fb79fbeab6536cfdf0_WomeninCyber-Feature.jpeg'),
          url('/wit3.jpeg')
        `,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Conteúdo centralizado */}
      <div className="relative px-4 text-center text-white max-w-3xl">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Bem vindes à CiberSummary!
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-8">
          Esse site foi criado com muito carinho por e para as alunas do projeto Mulher Digital, para consultas práticas durante o curso - e a vida!
        </p>
        <a
          href="/menu"
          className="inline-flex items-center justify-center py-3 px-6 text-base font-medium text-white rounded-lg border border-white hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 transition"
        >
          Começar
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Jumbo;
