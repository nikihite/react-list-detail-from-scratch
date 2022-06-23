import { check } from 'prettier';
import { client, checkError } from './client';

export async function getMovies(from = 0, to = 30) {
  const response = await client
    .from('disney_movies_tv_table')
    .select('*', {count: 'exact' })
    .range(from, to);

  return checkError(response);
}

export async function getSingleMovie(id) {
  const response = await client
    .from('disney_movies_tv_table')
    .select('*')
    .match({ id })
    .single();

  return checkError(response);

}