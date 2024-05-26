import Link from "next/link";
import "./cards.css";
import Image from "next/image";
export default function SearchBar({data, inputValue}) {
  return (
    <>
          <p>Recherche pour: {inputValue}</p>
      {data.map((movie, k) => (
        <div className="cards" key={movie.id}>
          <Link className="img-search" href={`/movies/${movie.id}`}>
            <Image
              className="img-caroussel"
              src={`https://image.tmdb.org/t/p/original${movie["backdrop_path"]}`}
              width={200}
              height={113}
              alt="image carousel"
              priority={true}
            />
            <p>{movie.title}</p>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

