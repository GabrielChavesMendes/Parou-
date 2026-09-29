import { MapPin } from 'lucide-react';

export default function MapSection({ route }) {
  const pathData = route.stops.map((stop, i) => `${i === 0 ? 'M' : 'L'} ${stop.x} ${stop.y}`).join(' ');
  const currentStop = route.stops.find(s => s.status === 'danger') || route.stops[route.stops.length - 1];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px] relative">
      <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-md border border-slate-200 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white"><MapPin size={16}/></div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Malha Logística: {route.code}</h3>
            <p className="text-[10px] text-slate-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Rastreio Ativo</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-slate-50 overflow-hidden">
        {/* Malha Quadriculada de Fundo */}
        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 0 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Silhueta de Área Urbana Simulada */}
          <path d="M 0 350 Q 300 400 600 200 T 1200 400 L 1200 600 L 0 600 Z" fill="#E2E8F0" opacity="0.4" />
          
          {/* Rota do Veículo */}
          <path d={pathData} fill="none" stroke="#4F46E5" strokeWidth="4" strokeDasharray="8 8" />
        </svg>
        
        {route.stops.map(stop => (
          <RouteNode key={stop.id} {...stop} isCurrent={stop.id === currentStop.id} />
        ))}
      </div>
      
      {/* Footer mantido igual ao anterior */}
    </div>
  );
}

function RouteNode({ label, time, status, x, y, duration, isCurrent }) {
  const colors = {
    success: 'bg-emerald-500 border-emerald-200 text-white',
    warning: 'bg-amber-500 border-orange-200 text-white',
    danger: 'bg-red-500 border-red-200 text-white',
    slate: 'bg-slate-400 border-slate-200 text-white'
  };

  return (
    <div className="absolute flex flex-col items-center" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
      {isCurrent && <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30 scale-150"></div>}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 shadow-sm z-10 ${colors[status]}`}>
        {label}
      </div>
      <div className="mt-2 bg-white px-2 py-1 rounded text-[10px] font-bold text-slate-600 shadow-sm border border-slate-200 whitespace-nowrap z-20">
        {time} {duration > 0 && `(${duration}m)`}
      </div>
      {isCurrent && (
        <div className="absolute top-12 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap z-30 shadow-lg">
          Posição Atual (Parado)
        </div>
      )}
    </div>
  );
}