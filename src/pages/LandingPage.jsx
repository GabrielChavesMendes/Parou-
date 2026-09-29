import { Link } from 'react-router-dom';
import { Map, Clock, TrendingDown, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <header className="px-8 py-6 flex justify-between items-center border-b border-slate-100">
        <img src={logo} alt="Parou?" className="h-10" />
        <Link to="/login" className="px-6 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-full hover:bg-indigo-100">Acessar Plataforma</Link>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full mb-6">Lançamento Oficial V1.0</div>
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-3xl">
          O tempo ocioso da sua frota não é mais invisível.
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl">
          Identifique gargalos, renegocie prazos e reduza custos operacionais descobrindo exatamente onde e por quanto tempo seus motoristas ficam parados na última milha.
        </p>
        
        <Link to="/login" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 flex items-center gap-2 text-lg">
          Começar Agora <ArrowRight size={20} />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl w-full text-left">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-xl mb-4"><Clock size={24}/></div>
            <h3 className="text-xl font-bold mb-2">Rastreio de Retenção</h3>
            <p className="text-slate-600 text-sm">Monitoramento automático do tempo exato de espera em docas e pontos de entrega.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl mb-4"><TrendingDown size={24}/></div>
            <h3 className="text-xl font-bold mb-2">Redução de Custos</h3>
            <p className="text-slate-600 text-sm">Painéis que cruzam o tempo de motor ligado com o combustível desperdiçado.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 flex items-center justify-center rounded-xl mb-4"><Map size={24}/></div>
            <h3 className="text-xl font-bold mb-2">Gestão Georreferenciada</h3>
            <p className="text-slate-600 text-sm">Mapeamento dinâmico indicando o trajeto exato e a severidade de cada parada.</p>
          </div>
        </div>
      </main>
    </div>
  );
}