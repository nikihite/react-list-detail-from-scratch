import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from './services/fetch-utils';
import './App.css';

export default function DetailPage() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function doFetch() {
      const data = await getSingleMovie(params.id);

      setMovie(data);
    }

    doFetch();
  }, [params.id]);
  return (
    <div className='movie-detail'>
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <p>Cast: {movie.cast}</p>
      <p>Released In: {movie.release_year}</p>
      <p>{movie.rating}</p>
      <p>{movie.duration}</p>
      <p>{movie.listed_in}</p>
    </div>
  );
}