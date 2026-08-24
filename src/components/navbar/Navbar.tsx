import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        
        {/* LOGO DA MARCA */}
        <Link
          to="/"
          className="flex items-center active:scale-95 transition-transform"
          onClick={() => setMenuAberto(false)}
        >
          <span className="text-2xl font-black text-blue-600 tracking-tight">
            Conecta<span className="text-slate-900">CRM</span>
          </span>
        </Link>

        {/* MENU DESKTOP (Aparece em telas médias e grandes) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link 
            to="/" 
            className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
          >
            Home
          </Link>
          <Link 
            to="/oportunidades" 
            className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
          >
            Oportunidades
          </Link>
          <Link 
            to="/sobre" 
            className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
          >
            Sobre
          </Link>
        </div>

        {/* BOTÃO HAMBÚRGUER / 3 BARRAS (Aparece apenas em telas pequenas / Mobile) */}
        <button
          className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-xl transition-all active:scale-95 border border-slate-200"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? (
            <X size={26} weight="bold" className="text-blue-600" />
          ) : (
            <List size={26} weight="bold" />
          )}
        </button>

      </nav>

      {/* MENU EXPANDIDO NO MOBILE */}
      {menuAberto && (
        <div className="md:hidden border-t border-slate-200 px-6 py-5 bg-white shadow-xl flex flex-col gap-4 text-base font-semibold text-slate-800 animate-in slide-in-from-top-2 duration-200">
          <Link
            to="/"
            className="hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-all"
            onClick={() => setMenuAberto(false)}
          >
            Home
          </Link>
          <Link
            to="/oportunidades"
            className="hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-all"
            onClick={() => setMenuAberto(false)}
          >
            Oportunidades
          </Link>
          <Link
            to="/sobre"
            className="hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-all"
            onClick={() => setMenuAberto(false)}
          >
            Sobre
          </Link>
        </div>
      )}
    </header>
  );
}