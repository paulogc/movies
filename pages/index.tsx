import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PageContainer } from "../src/ui/PageContainer";
import { MovieList } from "../src/domain/movies/components/MovieList";
import { normalizeMovies } from "../src/domain/movies/helpers/normalizeMovies";
import { Search } from "../src/domain/movies/components/Search";
import { Button } from "../src/ui/Button";
import type { Movie } from "../src/domain/movies/types";
import { ButtonContainer } from "../src/domain/movies/components/Page/styles";

interface HomePageProps {
  movies: Movie[];
  search: string;
  page: number;
  total: number;
}

export default function Home({ movies, search, page, total }: HomePageProps) {
  const { push } = useRouter();
  const [loadedMovies, setLoadedMovies] = useState([]);

  const handleLoadMore = () => {
    push(`/?search=${search}&page=${page + 1}`);
  };

  useEffect(() => {
    setLoadedMovies([...loadedMovies, ...movies]);
  }, [page]);

  useEffect(() => {
    setLoadedMovies(movies);
  }, [search]);

  const displayLoadMore = movies.length < total;

  return (
    <PageContainer>
      <Search />
      <MovieList movies={loadedMovies} search={search} />
      <ButtonContainer>
        {displayLoadMore && (
          <Button label="Load More" onClick={handleLoadMore} />
        )}
      </ButtonContainer>
    </PageContainer>
  );
}

Home.getInitialProps = async ({ query }) => {
  if (query.search) {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query.search}&page=${query.page}&type=movie&apikey=c5730e0`
    );
    const { Search, totalResults } = await res.json();
    return {
      movies: normalizeMovies(Search || []),
      total: Number(totalResults),
      page: Number(query.page),
      search: query.search,
    };
  }

  return {
    movies: [],
    total: 0,
    page: 1,
  };
};
