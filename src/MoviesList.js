import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <div className='movies-list'>
      {
        movies.map((movie, i) =>
          <Link key={movie.title + i + movie.id} to={`/movies/${movie.id}`}>
            <div className='movie'>
              <h3>{movie.title}</h3>
              <p>{movie.release_year}</p>
              <p>{movie.rating}</p>
              <p>{movie.duration}</p>
            </div>
          </Link>)
      }
    </div>
  );
}
