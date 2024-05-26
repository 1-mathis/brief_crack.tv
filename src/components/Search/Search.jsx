// "use client"

// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import './search.css';

// export default function SearchBar() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const inputRef = useRef(null);

//   const apiKey = 'd2a58d43d05ed4c8b14a3e3d40b01b51';

//   const handleSearch = async (searchQuery) => {
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
//         params: {
//           api_key: apiKey,
//           query: searchQuery
//         }
//       });
//       setResults(response.data.results);
//     } catch (error) {
//       console.error('Erreur lors de la recherche des films:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setQuery(value);
//     if (value.trim() === '') {
//       setResults([]);
//     } else {
//       handleSearch(value);
//     }
//   };

//   return (
//     <div>
//       <div className="input-btn">
//         <input
//           type="text"
//           ref={inputRef}
//           value={query}
//           onChange={handleChange}
//           placeholder="Rechercher un film..."
//         />
//         <button onClick={() => handleSearch(query)}>Rechercher</button>
//       </div>
//       {results.length === 0 && query.trim() !== '' && (
//         <p>Aucun film trouvé.</p>
//       )}
//       <ul>
//         {results.map((movie) => (
//           <li className='jaja' key={movie.id}>
//             <Link className='pala' href={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

"use client";

import "./search.css";

export default function SearchBar() {
  return (
    <form className="search-form" action="/search">
      <input
        type="text"
        id="search-movie"
        name="search-movie"
        placeholder="Rechercher un film"
      />
    </form>
  );
}
