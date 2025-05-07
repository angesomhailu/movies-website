"use client";

import UserButton from "@/components/user-button";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  posterUrl: string;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Mock data for favorite movies (this should eventually fetch from an API or localStorage)
  useEffect(() => {
    const mockFavorites = [
      { id: 1, title: "Inception", posterUrl: "/inception.jpg" },
      { id: 2, title: "Interstellar", posterUrl: "/interstellar.jpg" },
      { id: 3, title: "The Dark Knight", posterUrl: "/dark-knight.jpg" },
      { id: 4, title: "Tenet", posterUrl: "/tenet.jpg" },
    ];
    setFavorites(mockFavorites);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <UserButton />
        </div>
      </header>

      {/* Body */}
      <div className="min-h-screen bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">🎬 My Favorite Movies</h2>
          <p className="text-center text-lg mb-12">
            Here are the movies you’ve added to your favorites list. Enjoy watching them anytime!
          </p>

          {favorites.length === 0 ? (
            <p className="text-center text-gray-600">You haven't added any favorite movies yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {favorites.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-gray-100 border rounded-lg shadow hover:shadow-lg transition"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
                    <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} MovieStream. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/component/about" className="text-gray-600 hover:text-blue-600">
              About Us
            </a>
            <a href="/component/privacy" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="/component/terms" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}