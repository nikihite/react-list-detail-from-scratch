import { useEffect, useState } from 'react';
import './App.css';
import { getMovies, getSingleMovie } from './services/fetch-utils';
import MoviesList from './MoviesList';
import Pagination from './Pagination';

const PER_PAGE = 40;

export default function ListPage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalMovies, setTotalMovies] = useState(1);

  useEffect(() => {
    async function doFetch() {
      const from = currentPage * PER_PAGE;
      const to = ((currentPage + 1) * PER_PAGE) + 1;
      const moviesAndCount = await getMovies(from, to);

      setTotalMovies(moviesAndCount.count);
      setMovies(moviesAndCount.data);
    }
    doFetch();
  }, [currentPage]);

  const lastPage = Math.floor(totalMovies / PER_PAGE);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage} />
      <MoviesList movies={movies} />
    </div>
  );
}