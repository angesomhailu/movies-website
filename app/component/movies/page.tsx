"use client";

import UserButton from "@/components/user-button";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with actual API call
    const fetchMovies = async () => {
      setLoading(true);
      const mockMovies = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        title: `Movie Title ${i + 1}`,
        thumbnail: "/placeholder.jpg",
        description: "Short description of the movie.",
      }));
      setMovies(mockMovies);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading movies...
      </div>
    );

  return (
    <>
      {/* Header */}
      <header className=" shadow-md">
        <div className="container mx-auto p-4 flex  justify-between items-center">
          <UserButton />
        </div>
      </header>

      {/* Body */}
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-amber-300 mb-6">Browse Movies</h2>
          <p className="text-center text-lg text-gray-400 mb-12">
            Explore our collection of movies and find your next favorite!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.description}</p>
                  <Link
                    href={`movies/${movie.id}`}
                    className="text-blue-400 mt-2 inline-block hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MovieStream. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/component/about" className="text-gray-400 hover:text-amber-300">
              About Us
            </a>
            <a href="/component/privacy" className="text-gray-400 hover:text-amber-300">
              Privacy Policy
            </a>
            <a href="/component/terms" className="text-gray-400 hover:text-amber-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}