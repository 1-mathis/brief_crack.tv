"use client";

import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import Image from "next/image";
import "./caroussel.css";
import Link from "next/link";

export default function Caroussel({ title, results }) {
  return (
    <div className="caroussel-container">
      <h2>{title}</h2>
      <ReactCaroussel
        slidesToShow={4}
        slidesToScroll={1}
        rendre responsive un caroussel en react
        infinite={true}
        autoplay={true}
        speed={10}
        display={{
          arrows: true,
          dots: true,
        }}
      >
        {results.map((movie) => (

          <Link key={movie.id} href={`/movies/${movie.id}`}> 
          
            <Image
              className="img-caroussel"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              width={500}
              height={250}
              alt={`image of ${movie.title}`}
              priority={true}
            />
            <h3>{movie.title}</h3>
          </Link>

        ))}
      </ReactCaroussel>
    </div>
  );
}
