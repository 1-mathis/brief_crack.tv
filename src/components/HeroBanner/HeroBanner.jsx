// import Image from "next/image";
// import "./heroBanner.css";
// import React from 'react';

"use client"

import React, { useState, useEffect } from 'react';

const HeroImage = () => {
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setPopularMovie(data.results[0]);
      } catch (error) {
        console.error('Erreur lors de la récupération du film le plus populaire :', error);
      }
    };

    fetchPopularMovie();
  }, []);

  return (
    <header style={{ paddingLeft: 0 }}>
      {popularMovie && (
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path})`, height: 400 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <a id="text-center" className='btn btn-outline-light btn-lg' href={`/movies/${popularMovie.id}`} role='button'>
                  Voir le film
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeroImage;