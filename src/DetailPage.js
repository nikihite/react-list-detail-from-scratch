import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from './services/fetch-utils';

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
            <h2>{movie.title}</h2>
            <a href={movie.link} target="_blank" rel="noreferrer"></a>
        </div>
    );
}