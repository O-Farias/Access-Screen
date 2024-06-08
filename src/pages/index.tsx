import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen animated-gradient">
      <div className="p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Bem-vindo!
        </h1>
        <p className="text-center text-gray-600">
          Escolha uma opção abaixo para continuar:
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
          >
            Registrar
          </Link>
          <Link
            href="/reset-password"
            className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
          >
            Recuperar Senha
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
