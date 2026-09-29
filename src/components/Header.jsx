import { Clock, DollarSign, Truck, ChevronDown, Search, Download } from 'lucide-react';

export default function Header({ route }) {
  return (
    <div className="sticky top-0 z-30 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-800">Central de Roteiros & Tempo Parado</h1>
            <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-2 py-1 rounded-md border border-indigo-100">{route.code}</span>
          </div>
          <p className="text-sm text-slate-500 mt-1">Rastreamento dinâmico de retenção em docas, tempo ocioso e custo.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-slate-50 rounded-lg border border-slate-200 p-1">
            <div className="px-3 py-1 flex items-center gap-2 border-r border-slate-200">
              <Clock size={14} className="text-slate-400" />
              <span className="text-xs text-slate-500">T. Parado Total:</span>
              <span className="text-sm font-bold text-slate-800">{route.metrics.idleTime}</span>
            </div>
            <div className="px-3 py-1 flex items-center gap-2 bg-emerald-50 rounded-r-md">
              <DollarSign size={14} className="text-emerald-600" />
              <span className="text-xs text-emerald-600">Economia:</span>
              <span className="text-sm font-bold text-emerald-700">R$ {route.metrics.economy}</span>
            </div>
          </div>
          <div className="flex bg-slate-100 rounded-lg p-1 text-sm font-medium border border-slate-200">
            <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-indigo-600">Hoje</button>
            <button className="px-4 py-1.5 text-slate-500 hover:text-slate-800">7 dias</button>
            <button className="px-4 py-1.5 text-slate-500 hover:text-slate-800">Este Mês</button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-200 px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Truck size={16} className="text-indigo-600" /> {route.driver} <ChevronDown size={14} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Buscar parada..." className="pl-9 pr-4 py-1.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600 w-64" />
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-700">
            <Download size={16} /> Exportar
          </button>
        </div>
      </div>
    </div>
  );
}