import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4 animate-bounce">🚫</div>
        <h1 className="text-6xl font-extrabold mb-2 drop-shadow-lg">404</h1>
        <p className="text-2xl font-medium mb-6">This page doesn't exist...</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 ease-in-out"
        >
          🚀 Take Me Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
