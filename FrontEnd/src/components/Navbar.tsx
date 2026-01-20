import { Link } from "react-router-dom";
export const Navbar = () => {
     const isAuthenticated = false;
  return (
 <header className="w-full border-b bg-white rounded-xl">
      <nav className="flex items-center justify-between rounded-2xl px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          OrnArias
        </Link>

        {/* Acciones */}
        {!isAuthenticated ? (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Iniciar sesión
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-blue-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-800"
            >
              Registrarse
            </Link>
          </div>
        ) : (
          <button className="rounded-lg border px-3 py-1.5 text-sm">
            ☰
          </button>
        )}
      </nav>
    </header>
  );
};
