import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }
    if (!email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      // Lógica de registro
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen animated-gradient">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Criar conta
        </h2>
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
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
                autoComplete="new-password"
                required
                className="w-full px-10 py-2 mt-1 bg-gray-200 text-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirme sua senha
            </label>
            <div className="flex items-center mt-1">
              <FaLock className="absolute ml-3 text-gray-500" />
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="w-full px-10 py-2 mt-1 bg-gray-200 text-black border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link href="/login" className="text-blue-600 hover:underline">
            Já tem uma conta? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
