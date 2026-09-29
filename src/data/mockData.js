export const initialRoutes = [
  {
    id: 1,
    code: 'Rota #402',
    driver: 'Carlos Silva - Van 04',
    metrics: {
      dist: '42,6', transit: '1h 14m', idleTime: '1h 37m', efficiency: 78,
      costPerKm: '3,42', economy: '512,00', consumption: '9,8', idleMin: 38, idleCost: '14,80'
    },
    stops: [
      { id: 'A', status: 'success', label: 'A', time: '08:15', name: 'Drogaria São Bento', address: 'Rua Pamplona, 320', window: '08:15 — 08:22', reason: 'Entrega Balcão', duration: 7, cost: '6,80', x: 150, y: 200 },
      { id: 'B', status: 'warning', label: 'B', time: '09:05', name: 'Supermercado Pão Bom', address: 'Rua Teodoro Sampaio, 840', window: '09:05 — 09:23', reason: 'Descarga Manual', duration: 18, cost: '19,20', x: 300, y: 280 },
      { id: 'C', status: 'success', label: 'C', time: '10:10', name: 'Hospital das Clínicas', address: 'Av. Dr. Enéas', window: '10:00 — 10:15', reason: 'Entrega Rápida', duration: 9, cost: '8,50', x: 550, y: 150 },
      { id: 'D', status: 'danger', label: 'D', time: 'Atual', name: 'CD Pinheiros', address: 'Av. Nações Unidas, 1420', window: '11:15 — 11:57', reason: 'Doca Ocupada / Espera', duration: 42, cost: '48,50', x: 750, y: 350 },
      { id: 'E', status: 'warning', label: 'E', time: '12:30', name: 'Centro Logístico', address: 'Marginal Pinheiros', window: '12:00 — 12:40', reason: 'Trânsito Local', duration: 21, cost: '22,10', x: 950, y: 250 },
      { id: 'F', status: 'slate', label: 'F', time: 'Destino', name: 'Base Final', address: 'Garagem Central', window: '13:00', reason: 'Fim de Turno', duration: 0, cost: '0,00', x: 1100, y: 400 }
    ]
  }
];