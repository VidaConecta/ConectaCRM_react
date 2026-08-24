import { Envelope } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800/80 w-full mt-auto relative overflow-hidden">
      {/* Brilho decorativo no topo do rodapé */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Marca + Frase */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5 max-w-lg">
          <Link to="/" className="text-xl font-black tracking-tight group">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
              Conecta
            </span>
            <span className="text-white">CRM</span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed italic font-light">
            "Conecte inteligência comercial, simplifique processos e impulsione o seu crescimento."
          </p>
        </div>

        {/* Contato + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs shrink-0">
          <a
            href="mailto:suporte@conectacrm.com"
            className="flex items-center gap-2 text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 px-3 py-1.5 rounded-lg transition-all shadow-sm"
          >
            <Envelope size={16} className="text-blue-400" />
            <span className="font-medium">suporte@conectacrm.com</span>
          </a>
          
          <p className="text-slate-500 text-[11px]">
            © 2026 <span className="text-slate-400 font-medium">CRM Vida Conecta</span>. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}