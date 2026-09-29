import { DollarSign, Zap, Clock, Activity, Lightbulb, AlertTriangle } from 'lucide-react';

export default function MetricsPanel({ route }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Painel de Custos & Eficiência Veicular</h2>
            <p className="text-xs text-slate-500">Relação direta entre tempo com motor ligado, consumo e custo quilométrico.</p>
          </div>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Telemetria Can-Bus</span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><DollarSign size={20}/></div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">-R$ 0,28 vs meta</span>
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Custo Médio por KM</p>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">R$ {route.metrics.costPerKm} <span className="text-sm font-medium text-slate-500">/ km</span></h3>
            <p className="text-xs text-emerald-600 font-medium">Economia: R$ {route.metrics.economy}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Zap size={20}/></div>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Diesel S10</span>
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Consumo Médio</p>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">9,8 <span className="text-sm font-medium text-slate-500">km / Litro</span></h3>
            <p className="text-xs text-indigo-600 font-medium">Eficiência do motor: 89% no alvo</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-red-200 border-l-4 border-l-red-500">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-red-50 text-red-500 rounded-lg"><Clock size={20}/></div>
              <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded">Alerta Ocioso</span>
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Motor Ligado Ocioso</p>
            <h3 className="text-2xl font-bold text-red-500 mb-2">38 min <span className="text-sm font-medium text-slate-500">hoje</span></h3>
            <p className="text-xs text-red-500 font-medium">Combustível perdido: ~2,4 L (R$ 14,80)</p>
          </div>
        </div>

        <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-indigo-600 text-white rounded-lg"><Activity size={20}/></div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Diretriz da Frota "Parou?": Desligamento em Doca</h4>
              <p className="text-xs text-slate-600">Vans com parada prevista &gt; 5 min são instruídas a desligar a ignição via app do motorista.</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-indigo-600">92% de Aderência</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={16} className="text-purple-600" />
              <h4 className="text-xs font-bold text-purple-700 uppercase">Sugestão Parou? IA</h4>
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">Nas terças e quintas entre 14h e 16h, o tempo parado no CD Pinheiros aumenta 38%. Antecipar a entrega economiza 28 min.</p>
            <button className="text-xs font-bold text-purple-700 hover:underline">Reordenar roteiro automaticamente &rarr;</button>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-orange-600" />
              <h4 className="text-xs font-bold text-orange-700 uppercase">Gargalo Recorrente</h4>
            </div>
            <p className="text-xs text-orange-800 mb-3 leading-relaxed">Supermercado Pão Bom: tempo de conferência médio subiu de 15m para 24m. Notificar a equipe de recebimento.</p>
            <button className="text-xs font-bold text-orange-700 hover:underline">Enviar pré-alerta à expedição &rarr;</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-800">Histórico de Ociosidade</h3>
            <p className="text-xs text-slate-500">Correlação tempo parado vs custo</p>
          </div>
          <div className="flex bg-slate-100 rounded p-1">
            <button className="px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded shadow-sm">Semana</button>
            <button className="px-3 py-1 text-slate-500 text-xs font-medium">Mês</button>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end relative mt-8 border-b border-slate-200 pb-2">
          <div className="absolute -top-6 left-0 flex gap-4 text-[10px] font-bold text-slate-500">
            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-indigo-600 rounded-full"></div> Tempo (min)</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Custo (R$)</span>
          </div>
          <div className="flex justify-between items-end h-40 gap-2 px-2">
            <div className="w-1/6 bg-indigo-200 h-[40%] rounded-t-sm"></div>
            <div className="w-1/6 bg-indigo-600 h-[80%] rounded-t-sm relative"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">Terça</div></div>
            <div className="w-1/6 bg-indigo-200 h-[30%] rounded-t-sm"></div>
            <div className="w-1/6 bg-indigo-600 h-[90%] rounded-t-sm"></div>
            <div className="w-1/6 bg-indigo-200 h-[50%] rounded-t-sm"></div>
            <div className="w-1/6 bg-emerald-300 h-[20%] rounded-t-sm"></div>
          </div>
          <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
            <path d="M 20 100 Q 60 20 120 120 T 220 30 T 300 80" fill="none" stroke="#F97316" strokeWidth="3" />
            <circle cx="60" cy="50" r="4" fill="#F97316" stroke="white" strokeWidth="2"/>
            <circle cx="200" cy="40" r="4" fill="#F97316" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase mt-2 px-2">
          <span>Seg</span><span className="text-slate-800">Ter *</span><span>Qua</span><span className="text-slate-800">Qui *</span><span>Sex</span><span className="text-emerald-600">Sáb</span>
        </div>
        
        <div className="mt-6 flex justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase">Horário Crítico Geral:</p>
            <p className="text-sm font-bold text-slate-800">14h00 às 16h30</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-orange-600 uppercase">Prejuízo Ocioso:</p>
            <p className="text-sm font-bold text-orange-600">+R$ 1.840 / sem</p>
          </div>
        </div>
      </div>
    </div>
  );
}