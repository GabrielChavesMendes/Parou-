import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MapSection from '../components/MapSection';
import MetricsPanel from '../components/MetricsPanel';
import StopsTable from '../components/StopsTable';

export default function Dashboard({ routes, setRoutes }) {
  const [activeRouteId, setActiveRouteId] = useState(routes[0]?.id);
  const [dateFilter, setDateFilter] = useState('hoje');

  const activeRoute = routes.find(r => r.id === activeRouteId) || routes[0];

  const handleNewRoute = () => {
    const newId = Date.now();
    const newRoute = {
      id: newId,
      code: `Rota #${Math.floor(Math.random() * 900) + 100}`,
      driver: 'Motorista Extra - Van',
      metrics: {
        dist: '12,4', transit: '0h 45m', idleTime: '0h 0m', efficiency: 100,
        costPerKm: '2,80', economy: '0,00', consumption: '11,2', idleMin: 0, idleCost: '0,00'
      },
      stops: [
        { id: 'A', status: 'success', label: 'A', time: 'Agora', name: 'Nova Partida', address: 'Base Logística', window: '08:00', reason: 'Início', duration: 0, cost: '0,00', x: 200, y: 300 },
        { id: 'B', status: 'slate', label: 'B', time: 'Pendente', name: 'Destino Final', address: 'Cliente Novo', window: '09:00', reason: 'A Caminho', duration: 0, cost: '0,00', x: 800, y: 200 }
      ]
    };
    setRoutes([...routes, newRoute]);
    setActiveRouteId(newId);
  };

  if (!activeRoute) return <div className="flex h-screen items-center justify-center">Carregando Rotas...</div>;

  return (
    <div className="flex h-screen w-full bg-[#F3F4F6] font-sans text-slate-800 overflow-hidden">
      <Sidebar 
        routes={routes} 
        activeRouteId={activeRouteId} 
        setActiveRouteId={setActiveRouteId} 
        onNewRoute={handleNewRoute} 
      />

      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <Header route={activeRoute} dateFilter={dateFilter} setDateFilter={setDateFilter} />
        
        <div className="p-8 space-y-8">
          <MapSection route={activeRoute} />
          <MetricsPanel route={activeRoute} dateFilter={dateFilter} />
          <StopsTable route={activeRoute} />
        </div>
      </main>
    </div>
  );
}