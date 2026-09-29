import { Link } from 'react-router-dom';
import { Map, Clock, DollarSign, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <header className="px-8 py-6 flex justify-between items-center border-b border-slate-200 bg-white shadow-sm">
        <img src={logo} alt="Parou?" className="h-8 object-contain" />
        <Link to="/login" className="px-6 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-full hover:bg-indigo-100 transition-colors">Acessar Painel</Link>
      </header>

      <main className="flex flex-col items-center text-center px-4 py-24 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full mb-8 border border-emerald-100">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Sistema de Telemetria Ativo
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Pare de perder dinheiro com o <span className="text-indigo-600">motor ocioso.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
          O buraco negro da última milha acabou. Descubra exatamente onde, por que e por quanto tempo sua frota fica parada. Identifique gargalos em docas, renegocie prazos e reduza o custo real de cada rota em tempo real.
        </p>
        
        <Link to="/login" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all flex items-center gap-2 text-lg">
          Começar a Rastrear Agora <ArrowRight size={20} />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left w-full">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-xl mb-6"><Clock size={24}/></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Retenção Visível</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Mapeamos o tempo exato de espera em cada cliente ou centro de distribuição, gerando alertas para atrasos fora da janela SLA.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl mb-6"><DollarSign size={24}/></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Cálculo de Prejuízo</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Cruzamos o tempo de motor ligado com o consumo de combustível, mostrando o custo financeiro exato do tempo ocioso diário.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition-colors">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 flex items-center justify-center rounded-xl mb-6"><Map size={24}/></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Mapa Minimalista</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Acompanhe a sua frota em uma interface limpa e focada em resultados, sem a poluição visual de mapas tradicionais.</p>
          </div>
        </div>
      </main>
    </div>
  );
}