import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      // Lógica de autenticação
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen animated-gradient">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <div className="flex items-center mt-1">
              <FaEnvelope className="absolute ml-3 text-gray-500" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-10 py-2 mt-1 bg-gray-200 text-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="flex items-center mt-1">
              <FaLock className="absolute ml-3 text-gray-500" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-10 py-2 mt-1 bg-gray-200 text-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link href="/register" className="text-blue-600 hover:underline">
            Criar conta
          </Link>
          {" | "}
          <Link
            href="/reset-password"
            className="text-blue-600 hover:underline"
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
