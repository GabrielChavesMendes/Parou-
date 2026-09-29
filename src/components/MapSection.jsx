import { MapPin, Navigation } from 'lucide-react';

export default function MapSection({ route }) {
  const pathData = route.stops.map((stop, i) => `${i === 0 ? 'M' : 'L'} ${stop.x} ${stop.y}`).join(' ');
  // Encontra o ponto onde o motorista está parado atualmente (status danger ou o último)
  const currentStop = route.stops.find(s => s.status === 'danger') || route.stops[0];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px] relative">
      <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-md border border-slate-200 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white"><MapPin size={16}/></div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Rastreamento Cartográfico Limpo</h3>
            <p className="text-[10px] text-slate-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Ao Vivo • Conectado</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-slate-50 overflow-hidden">
        {/* Fundo Minimalista (Grid) para evitar a poluição do Google Maps */}
        <svg className="absolute inset-0 w-full h-full opacity-40" style={{ zIndex: 0 }}>
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#CBD5E1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          {/* Linha da Rota conectando os pontos */}
          <path d={pathData} fill="none" stroke="#4F46E5" strokeWidth="3" strokeDasharray="6 6" />
        </svg>
        
        {route.stops.map(stop => (
          <RouteNode key={stop.id} {...stop} />
        ))}

        {/* Marcador do Motorista em Tempo Real */}
        {currentStop && (
          <div className="absolute z-30 flex flex-col items-center transition-all duration-1000" style={{ left: currentStop.x, top: currentStop.y, transform: 'translate(-50%, -100%)', marginTop: '-15px' }}>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-indigo-500 rounded-full animate-ping opacity-30"></div>
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10"><Navigation size={14} className="fill-current"/></div>
            </div>
            <div className="bg-indigo-900 text-white text-[9px] font-bold px-2 py-1 rounded shadow-md mt-1 whitespace-nowrap">Motorista Parado</div>
          </div>
        )}
      </div>
    </div>
  );
}

function RouteNode({ label, time, status, address, x, y }) {
  const colors = {
    success: 'bg-emerald-500 border-emerald-200 text-white',
    warning: 'bg-amber-500 border-orange-200 text-white',
    danger: 'bg-red-500 border-red-200 text-white',
    slate: 'bg-slate-400 border-slate-200 text-white'
  };
  return (
    <div className="absolute flex flex-col items-center z-10 hover:z-20 group" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 shadow-sm transition-transform group-hover:scale-125 ${colors[status]}`}>{label}</div>
      <div className="mt-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold text-slate-600 shadow-sm border border-slate-200 whitespace-nowrap text-center">
        {time} <br/><span className="text-[8px] font-medium text-slate-400">{address.substring(0, 15)}...</span>
      </div>
    </div>
  );
}