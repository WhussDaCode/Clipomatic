import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <header className="text-white text-4xl font-bold mb-12">
        <div className="flex items-center justify-center">
          <img
            src="/logo.png" // Replace with your logo file path
            alt="Logo"
            className="h-12 w-12 mr-4"
          />
          <span>AutoTik</span>
        </div>
      </header>

      {/* Buttons */}
      <div className="relative">
        <button
          className="absolute left-0 right-0 mx-auto -top-20 bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-2xl shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring focus:ring-green-300"
        >
          Télécharger la vidéo sur TikTok
        </button>
        <button
          className="absolute left-0 right-0 mx-auto top-20 bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-2xl shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring focus:ring-green-300"
        >
          Créer automatiquement
        </button>
      </div>
    </div>
  );
};

export default HomePage;