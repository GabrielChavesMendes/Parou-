import { Link } from 'react-router-dom';
import { ArrowLeft, User, Truck, Settings, AlertTriangle, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Profile({ routes }) {
  const [profileData] = useState(() => {
    const saved = localStorage.getItem('parou_user_profile');
    return saved ? JSON.parse(saved) : { vehicle: 'van', service: 'entrega' };
  });

  const totalRoutes = routes.length;

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <header className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
        <Link to="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold">
          <ArrowLeft size={20} /> Voltar ao Painel
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">Perfil do Condutor</h1>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-indigo-50 rounded-full mb-4 flex items-center justify-center text-indigo-600">
             <User size={40} />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Motorista Padrão</h2>
          <p className="text-sm text-slate-500 mb-6">Operação Logística</p>
          
          <div className="w-full text-left space-y-4 pt-6 border-t border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Veículo Registrado</p>
              <p className="text-sm font-bold text-slate-700 flex items-center gap-2 mt-1">
                <Truck size={14} className="text-indigo-600"/> {profileData.vehicle.toUpperCase()}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Categoria de Serviço</p>
              <p className="text-sm font-medium text-slate-700 mt-1 capitalize">{profileData.service}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2"><Settings size={18}/> Preferências</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Notificações de Gargalo (SLA)</span>
                <button className="w-10 h-6 bg-indigo-600 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div></button>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Modo de Economia de Bateria</span>
                <button className="w-10 h-6 bg-slate-300 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div></button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 mb-4">Estatísticas da Conta</h3>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                 <p className="text-2xl font-bold text-indigo-700">{totalRoutes}</p>
                 <p className="text-xs font-bold text-indigo-500 uppercase">Rotas Executadas</p>
               </div>
               <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                 <p className="text-2xl font-bold text-emerald-700">95%</p>
                 <p className="text-xs font-bold text-emerald-500 uppercase">Eficiência Média</p>
               </div>
            </div>
          </div>

          <div className="text-right flex justify-between items-center">
             <button className="text-sm font-bold text-red-500 hover:underline flex items-center gap-2"><AlertTriangle size={16}/> Excluir Minha Conta</button>
             <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-indigo-600 bg-white px-4 py-2 rounded-lg border border-slate-200"><LogOut size={16}/> Sair</Link>
          </div>
        </div>
      </div>
    </div>
  );
}