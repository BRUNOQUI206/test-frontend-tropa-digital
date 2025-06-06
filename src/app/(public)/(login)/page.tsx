'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usersResponseMock } from '../../../mock/users-response.mock';
import Cookies from 'js-cookie';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = usersResponseMock.find(
      (userItem) => userItem.email === email && userItem.password === password
    );

    if (user) {
      Cookies.set('token', 'true', { expires: 1 });
      Cookies.set('user', JSON.stringify(user), { expires: 1 });

      router.push('/dashboard/eventos');
    } else {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <main className="gap-10 flex rounded-2xl bg-white p-3 shadow-2xl">
        <div className="flex h-[480px] flex-col items-start px-5 py-10 sm:w-[350px]">
          <img src="/assets/logo.png" alt="Tropa-Digital" className="mb-9" />
          <h1 className="text-2xl font-bold text-orange-700/80">Bem-vindo de volta</h1>
          <p className="mb-9 text-sm text-blue-800/50">Entre com sua conta para acessar o painel.</p>
          {error && <p className="mb-2 text-red-500">{error}</p>}
          <form className="flex w-full flex-col" onSubmit={handleLogin}>
            <Input
              label="E-mail"
              type="email"
              placeholder="seunome@seuservidor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Digite aqui"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              showToggle
            />
            <Button disabled={!email || !password}>Enviar</Button>
          </form>
        </div>
        <aside className="hidden sm:flex relative items-end">
          <div className="absolute h-full w-full rounded-2xl bg-orange-700/80"></div>
          <img src="./assets/monitoring.png" alt="" className="-translate-x-10 transform" />
        </aside>
      </main>
    </section>
  );
};

export default LoginPage;
