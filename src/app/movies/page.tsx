// src/app/movies/page.tsx

import Link from 'next/link';

export default function Movies() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-700 text-white p-2">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </div>
        </div>
      </nav>
      <h2 className="text-xl font-semibold p-2">
        Bienvenido a la sección de Películas
      </h2>
    </div>
  );
}
