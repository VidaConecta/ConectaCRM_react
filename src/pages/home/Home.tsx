import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-28 pb-12 md:pb-16 flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-xl border border-slate-200 p-6 md:p-12 shadow-sm">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
            Organize seus clientes. Feche mais negócios.
          </h1>
          <p className="text-base text-slate-600">
            O ConectaCRM reúne contatos, oportunidades e o funil de vendas da
            sua equipe em um só lugar, para você vender mais com menos
            esforço.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              to="/cadastro"
              className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
            >
              Criar conta grátis
            </Link>
            <a
              href="#sobre"
              className="text-blue-700 text-base px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors font-medium cursor-pointer"
            >
              Saiba mais
            </a>
          </div>
        </div>
        <div className="flex-1 w-full h-64 md:h-80 rounded-lg overflow-hidden border border-slate-200">
          <img
            className="w-full h-full object-cover"
            alt="Painel do ConectaCRM mostrando gestão de clientes, funil de vendas e fechamento de negócios"
            src="https://ik.imagekit.io/zvv7puf6g/Gemini_Generated_Image_f8yhcf8yhcf8yhcf.jpg"
          />
        </div>
      </section>
    </main>
  );
}
