import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Plus, Trash2, UserCircle, X } from 'lucide-react';import logo from '../assets/logo.png';
import MapSection from '../components/MapSection';
import MetricsPanel from '../components/MetricsPanel';
import StopsTable from '../components/StopsTable';

export default function Dashboard({ routes, setRoutes }) {
  const [activeRouteId, setActiveRouteId] = useState(routes[0]?.id);
  const [dateFilter, setDateFilter] = useState('hoje');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estados do Modal
  const [newRouteData, setNewRouteData] = useState({ name: '', start: '', end: '', stop1: '' });

  const activeRoute = routes.find(r => r.id === activeRouteId) || routes[0];

  const handleDelete = (id, e) => {
    e.stopPropagation(); // Evita que clique na lixeira abra a rota
    const updated = routes.filter(r => r.id !== id);
    setRoutes(updated);
    if (activeRouteId === id && updated.length > 0) setActiveRouteId(updated[0].id);
  };

  const handleCreateRoute = (e) => {
    e.preventDefault();
    const newId = Date.now();
    const newRoute = {
      id: newId,
      code: newRouteData.name || `Rota #${Math.floor(Math.random() * 900) + 100}`,
      driver: 'Você - Veículo Atual',
      metrics: {
        dist: '22,4', transit: '0h 50m', idleTime: '0h 12m', efficiency: 95,
        costPerKm: '2,90', economy: '120,00', consumption: '10,5', idleMin: 12, idleCost: '4,50'
      },
      stops: [
        { id: '1', status: 'success', label: 'Início', time: 'Agora', name: 'Partida', address: newRouteData.start, reason: 'Saída da Base', duration: 0, cost: '0,00', x: 200, y: 150 },
        { id: '2', status: 'danger', label: 'Parada', time: 'Em Andamento', name: 'Ponto de Entrega', address: newRouteData.stop1, reason: 'Descarregando', duration: 12, cost: '4,50', x: 500, y: 350 },
        { id: '3', status: 'slate', label: 'Fim', time: 'Pendente', name: 'Destino', address: newRouteData.end, reason: 'Retorno', duration: 0, cost: '0,00', x: 900, y: 250 }
      ]
    };
    setRoutes([...routes, newRoute]);
    setActiveRouteId(newId);
    setIsModalOpen(false);
    setNewRouteData({ name: '', start: '', end: '', stop1: '' });
  };

  if (!activeRoute) return <div className="flex h-screen items-center justify-center font-bold text-slate-500">Nenhuma rota encontrada. Crie uma nova.</div>;

  return (
    <div className="flex h-screen w-full bg-[#F3F4F6] font-sans text-slate-800 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20">
        <div className="p-6 flex justify-between items-center">
          <img src={logo} alt="Parou?" className="h-8 object-contain" />
          <Link to="/perfil" className="text-slate-400 hover:text-indigo-600 transition-colors" title="Meu Perfil">
            <UserCircle size={28} />
          </Link>
        </div>

        <div className="px-4 mb-4">
          <button onClick={() => setIsModalOpen(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors">
            <Plus size={16} /> Nova Rota
          </button>
        </div>

        <div className="px-4 flex-1 overflow-y-auto">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Suas Rotas</h3>
          <div className="space-y-1">
            {routes.map(r => (
              <div key={r.id} onClick={() => setActiveRouteId(r.id)} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeRouteId === r.id ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
                <div className="flex items-center"><Map size={14} className="mr-2"/> <span className="truncate w-32">{r.code}</span></div>
                <button onClick={(e) => handleDelete(r.id, e)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={14}/></button>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <div className="sticky top-0 z-30 flex flex-col bg-white border-b border-slate-200">
          <header className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">Painel de Retenção <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-2 py-1 rounded-md">{activeRoute.code}</span></h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 rounded-lg p-1 text-sm font-medium border border-slate-200">
                {['hoje', '7dias', 'mes'].map(filter => (
                  <button key={filter} onClick={() => setDateFilter(filter)} className={`px-4 py-1.5 rounded-md transition-all ${dateFilter === filter ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}>
                    {filter === 'hoje' ? 'Hoje' : filter === '7dias' ? '7 dias' : 'Este Mês'}
                  </button>
                ))}
              </div>
            </div>
          </header>
        </div>
        
        <div className="p-8 space-y-8">
          <MapSection route={activeRoute} />
          <MetricsPanel route={activeRoute} dateFilter={dateFilter} />
          <StopsTable route={activeRoute} />
        </div>
      </main>

      {/* MODAL DE CRIAÇÃO DE ROTA */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Map size={18}/> Estruturar Nova Rota</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-red-500"><X size={20}/></button>
            </div>
            <form onSubmit={handleCreateRoute} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome/Identificador da Rota</label>
                <input type="text" required value={newRouteData.name} onChange={e => setNewRouteData({...newRouteData, name: e.target.value})} placeholder="Ex: Rota Centro - Tarde" className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Endereço de Partida</label>
                <input type="text" required value={newRouteData.start} onChange={e => setNewRouteData({...newRouteData, start: e.target.value})} placeholder="Ex: Av. Paulista, 1000" className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-indigo-500" />
              </div>
              <div className="pl-4 border-l-2 border-indigo-200 relative">
                <div className="absolute -left-1.5 top-3 w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                <label className="block text-xs font-bold text-indigo-600 uppercase mb-1">Ponto de Parada (Cliente)</label>
                <input type="text" required value={newRouteData.stop1} onChange={e => setNewRouteData({...newRouteData, stop1: e.target.value})} placeholder="Ex: Rua Augusta, 500" className="w-full px-3 py-2 border border-indigo-200 rounded-lg outline-none focus:border-indigo-500 bg-indigo-50/30" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Destino Final</label>
                <input type="text" required value={newRouteData.end} onChange={e => setNewRouteData({...newRouteData, end: e.target.value})} placeholder="Ex: Garagem Central" className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-indigo-500" />
              </div>
              <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 mt-4 shadow-md">Iniciar Rastreamento da Rota</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}