

import { getTopRated } from "@/server/topRatedMovies.js";
import { getPopularMovies } from "@/server/popularMovies.js";
import { getUpcomingMovies } from "@/server/upcomingMovies";
import Caroussel from "@/components/Caroussel/Caroussel";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import SearchBar from "@/components/Search/Search.jsx";

export default async function Home() {
  const topRated = await getTopRated();
  const popular = await getPopularMovies();
  const upComing = await getUpcomingMovies();
  return (
    <>
  <title>crack.TV</title>

      <header>
        <HeroBanner />
      </header>

      <main>
        <SearchBar />
        <Caroussel title="Nos films es mieux notés" results={topRated.results} />
        <Caroussel title="Nos films les plus populiares" results={popular.results} />
        <Caroussel title="Nos films ajoutés récement" results={upComing.results} />
        <div>
    </div>
      </main>
    </>
  );
}