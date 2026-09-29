import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Vai direto para o Dashboard sem checar banco de dados
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Parou?" className="h-10" />
        </div>
        
        <div className="flex mb-6 border-b border-slate-200">
          <button onClick={() => setIsLogin(true)} className={`flex-1 pb-3 font-bold ${isLogin ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400'}`}>Entrar</button>
          <button onClick={() => setIsLogin(false)} className={`flex-1 pb-3 font-bold ${!isLogin ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400'}`}>Cadastrar</button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Empresa / Transportadora</label>
              <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Profissional</label>
            <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
            <input type="password" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none" />
          </div>
          
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors mt-4">
            {isLogin ? 'Acessar Dashboard' : 'Criar Conta'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-xs text-slate-500 hover:text-indigo-600 font-medium">&larr; Voltar para a página inicial</Link>
        </div>
      </div>
    </div>
  );
}