import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, preencha o campo de email.");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen animated-gradient">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Recuperar Senha
        </h2>
        {error && <p className="text-sm text-center text-red-500">{error}</p>}
        <form onSubmit={handleResetPassword} className="space-y-6">
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
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Enviar link de recuperação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
