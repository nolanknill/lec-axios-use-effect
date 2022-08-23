import { useState, useEffect } from 'react';
import { fetchTvShow } from '../../utils/api-utils';

function TvShow({ id }) {
    const [tvShow, setTvShow] = useState(null);
    
    useEffect(() => {
        fetchTvShow(id)
            .then(tvShowResponse => {
                setTvShow(tvShowResponse.data);
            });
    }, [id]);

    

    if (!tvShow) {
        return <h2>Loading... </h2>
    }

    return (
        <article>
            <h2>{tvShow.name}</h2>
            <p>Channel: {tvShow.channel}</p>
            <p>Rating: {tvShow.rating}</p>
            <p>Number of seasons: {tvShow.numberOfSeasons}</p>
            <p>Genre: {tvShow.genre}</p>
            <div>Starring:
            <ul>
                
                {tvShow.starring.map((actor, i) => (
                    <li key={i}>{actor}</li>
                ))}
            </ul>
            </div>
            
        </article>

    )

}

export default TvShow;