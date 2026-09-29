import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [vehicle, setVehicle] = useState('van');
  const [service, setService] = useState('entrega');
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Salva os dados do veículo no perfil temporário para mostrar no Dashboard
      localStorage.setItem('parou_user_profile', JSON.stringify({ vehicle, service }));
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Parou?" className="h-10 object-contain" />
        </div>
        
        <div className="flex mb-6 border-b border-slate-200">
          <button onClick={() => setIsLogin(true)} className={`flex-1 pb-3 font-bold ${isLogin ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400'}`}>Acessar</button>
          <button onClick={() => setIsLogin(false)} className={`flex-1 pb-3 font-bold ${!isLogin ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400'}`}>Cadastrar</button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome / Transportadora</label>
                <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Veículo</label>
                  <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none bg-white">
                    <option value="van">Van / Furgão</option>
                    <option value="caminhao">Caminhão VUC</option>
                    <option value="moto">Motocicleta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Serviço</label>
                  <select value={service} onChange={(e) => setService(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none bg-white">
                    <option value="entrega">Entrega (Última Milha)</option>
                    <option value="coleta">Coleta Reversa</option>
                    <option value="misto">Misto</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
            <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
            <input type="password" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none" />
          </div>
          
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors mt-4">
            {isLogin ? 'Entrar no Sistema' : 'Criar Conta e Rastrear'}
          </button>
        </form>
      </div>
    </div>
  );
}