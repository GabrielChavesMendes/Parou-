import { Link } from 'react-router-dom';
import { ArrowLeft, User, Truck, Settings, Moon, Globe, LogOut } from 'lucide-react';

export default function Profile({ routes }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <header className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
        <Link to="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold">
          <ArrowLeft size={20} /> Voltar ao Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">Painel do Usuário</h1>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna Esquerda: Foto e Dados Básicos */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><span className="text-white text-xs font-bold">Trocar Foto</span></div>
             <User size={40} className="text-slate-400" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Rodrigo Neves</h2>
          <p className="text-sm text-slate-500 mb-6">Chefe de Despacho</p>
          
          <div className="w-full text-left space-y-3 pt-6 border-t border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Tipo de Transporte</p>
              <p className="text-sm font-medium text-slate-700 flex items-center gap-2"><Truck size={14} className="text-indigo-600"/> Frota Mista (Vans e VUCs)</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Empresa</p>
              <p className="text-sm font-medium text-slate-700">Logística Rápida BR</p>
            </div>
          </div>
        </div>

        {/* Coluna Central e Direita: Histórico e Configurações */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Configurações Funcionais */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2"><Settings size={18}/> Preferências do Sistema</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3"><Moon size={18} className="text-slate-500" /> <span className="text-sm font-medium">Modo Escuro</span></div>
                <button className="w-10 h-6 bg-slate-300 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div></button>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-3"><Globe size={18} className="text-slate-500" /> <span className="text-sm font-medium">Idioma</span></div>
                <select className="bg-transparent text-sm font-bold text-indigo-600 outline-none"><option>Português (BR)</option><option>English</option></select>
              </div>
            </div>
          </div>

          {/* Histórico de Rotas */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 mb-4">Histórico Recente de Rotas</h3>
            <div className="space-y-2">
              {routes.map(r => (
                <div key={r.id} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg border border-slate-100 transition-colors">
                  <div>
                    <p className="text-sm font-bold text-slate-800">{r.code}</p>
                    <p className="text-xs text-slate-500">{r.driver}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-red-500">{r.metrics.idleTime} Parado</p>
                    <p className="text-[10px] text-slate-400">Eficiência: {r.metrics.efficiency}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-right">
             <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-700 bg-red-50 px-4 py-2 rounded-lg border border-red-100"><LogOut size={16}/> Sair e Desconectar</Link>
          </div>

        </div>
      </div>
    </div>
  );
}