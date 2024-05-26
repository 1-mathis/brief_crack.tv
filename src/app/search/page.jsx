"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchMovie } from "@/server/searchMovie";
import Cards from "@/components/Cards/Cards";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("search-movie");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchMovie(query)
        .then((response) => {
          setResults(response.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Cards data={results} />;
}