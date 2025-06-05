'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isAuth = localStorage.getItem('auth') === 'true';
    if (isAuth) {
      router.push('/eventos');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'bruno@email.com' && password === '123456') {
      localStorage.setItem('auth', 'true');
      router.push('/eventos');
    } else {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-100">
      <main className="gap-5 flex rounded-2xl bg-white p-3 shadow-2xl">
        <div className="flex h-[480px] w-[350px] flex-col items-start px-5 py-10">
          <img src="./assets/logo.png" alt="" className="mb-9" />
          <h1 className="text-2xl font-bold text-orange-700/80">Bem-vindo de volta</h1>
          <p className="mb-9 text-sm text-blue-800/50">Entre com sua conta para acessar o painel.</p>
          {error && <p className="mb-2 text-red-500">{error}</p>}
          <form className="flex w-full flex-col" onSubmit={handleLogin}>
            <div className="mb-4 flex flex-col">
              <label htmlFor="" className="text-xs font-semibold text-orange-700/80">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full outline-none bg-[#F6F6F6] px-6 py-3 text-xs placeholder:text-blue-800/50"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="" className="text-xs font-semibold text-orange-700/80">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite aqui"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-full outline-none bg-[#F6F6F6] px-6 py-3 text-xs placeholder:text-blue-800/50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-orange-700/80 py-2 text-sm font-medium text-white hover:bg-orange-700/80 disabled:cursor-not-allowed disabled:bg-orange-700/80 disabled:opacity-50"
              disabled={!email || !password}
            >
              Enviar
            </button>
          </form>
        </div>
        <aside className="relative flex items-end">
          <div className="absolute h-full w-full rounded-2xl bg-orange-700/80"></div>
          <img src="./assets/monitoring.png" alt="" className="-translate-x-10 transform" />
        </aside>
      </main>
    </section>
  );
};

export default LoginPage;
