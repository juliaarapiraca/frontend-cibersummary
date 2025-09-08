function Menu() {
  return (
    <div className="h-screen flex items-center justify-center bg-white" style={{ backgroundColor: "##FAF0E6" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full px-6">
        <a
          href="/glossario"
          className="flex items-center justify-center rounded-xl h-72 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          style={{ backgroundColor: "#4169E1" }}
          aria-label="Ir para Glossário"
        >
          <span className="text-4xl font-bold text-white">Glossário</span>
        </a>

        <a
          href="/resumos"
          className="flex items-center justify-center rounded-xl h-72 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          style={{ backgroundColor: "#4169E1" }}
          aria-label="Ir para Resumos"
        >
          <span className="text-4xl font-bold text-white">Resumos</span>
        </a>
      </div>
    </div>
  );
}

export default Menu;
