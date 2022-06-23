import { useEffect, useState } from 'react';
import './App.css';
import { getMovies } from './services/fetch-utils.js';
import MoviesList from './MoviesList';
import Pagination from './Pagination';

const PER_PAGE = 40;

export default function ListPage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function doFetch() {
      const from = currentPage * PER_PAGE;
      const to = ((currentPage + 1) * PER_PAGE) + 1;
      const data = await getMovies(from, to);
      setMovies(data);
    }
    doFetch();
  }, [currentPage]);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
      <MoviesList movies={movies} />
    </div>
  );
}