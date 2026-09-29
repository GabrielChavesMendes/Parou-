import { ListFilter } from 'lucide-react';

export default function StopsTable({ route }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
      <div className="p-6 border-b border-slate-200 flex justify-between items-end">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><ListFilter size={20}/></div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Registro Detalhado: {route.code}</h3>
            <p className="text-xs text-slate-500">Detalhamento individual de cada ponto.</p>
          </div>
        </div>
        <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1.5 rounded-full">{route.stops.length} Paradas</span>
      </div>

      <table className="w-full text-left text-sm divide-y divide-slate-100">
        <thead>
          <tr className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            <th className="p-4 pl-6">Ponto & Local</th>
            <th className="p-4">Motivo / Status</th>
            <th className="p-4">Duração</th>
            <th className="p-4">Custo Ext.</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {route.stops.map(stop => (
            <tr key={stop.id} className="hover:bg-slate-50">
              <td className="p-4 pl-6 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full text-white font-bold flex items-center justify-center text-xs ${stop.status === 'danger' ? 'bg-red-500' : stop.status === 'warning' ? 'bg-amber-500' : stop.status === 'slate' ? 'bg-slate-400' : 'bg-emerald-500'}`}>{stop.id}</div>
                <div>
                  <p className="font-bold text-slate-800">{stop.name}</p>
                  <p className="text-[10px] text-slate-500">{stop.address}</p>
                </div>
              </td>
              <td className="p-4 text-xs font-medium text-slate-600">{stop.reason}</td>
              <td className="p-4 font-bold text-slate-800">{stop.duration} min</td>
              <td className="p-4 font-bold text-slate-800">R$ {stop.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}