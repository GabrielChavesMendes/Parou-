import { Map, Plus } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Sidebar({ routes, activeRouteId, setActiveRouteId, onNewRoute }) {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20">
      <div className="p-6">
        <img src={logo} alt="Parou Logo" className="h-16 mb-2 object-contain" />
        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Gestão de Tempo Ocioso</p>
      </div>

      <div className="px-4 mb-4">
        <button onClick={onNewRoute} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-indigo-200 transition-colors">
          <Plus size={16} /> Novo Roteiro
        </button>
      </div>

      <div className="px-4 mb-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Roteiros Ativos</h3>
        <div className="space-y-1">
          {routes.map(r => (
            <button 
              key={r.id}
              onClick={() => setActiveRouteId(r.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeRouteId === r.id 
                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Map size={14} className="inline mr-2"/> {r.code}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 mt-auto">
        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <div className="w-8 h-8 bg-slate-300 rounded-full bg-[url('https://i.pravatar.cc/100?img=11')] bg-cover"></div>
          <div>
            <p className="text-xs font-bold text-slate-800">Rodrigo Neves</p>
            <p className="text-[10px] text-slate-500">Chefe de Despacho</p>
          </div>
        </div>
      </div>
    </aside>
  );
}