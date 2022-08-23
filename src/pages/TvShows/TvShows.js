import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchTvShows } from '../../utils/api-utils';
import TvShow from "../TvShow/TvShow";

function TvShows() {
    // 1. initialize state 
    const [tvShows, setTvShows] = useState([]);
    const [selectedTvShowId, setSelectedTvShowId] = useState(null);
    const [isError, setIsError] = useState(false);
    const { tvShowId } = useParams();

    useEffect(() => {
        // 2. Create a useEffect to trigger API request on mount
        fetchTvShows()
            .then(tvShowsResponse => {
                // 3. once API response is received -> update our state!           
                setTvShows(tvShowsResponse.data);

                setSelectedTvShowId(tvShowId || tvShowsResponse.data[0].id);
            })
            .catch(error => {
                setIsError(true);
            })
    }, [tvShowId]);
    

    if (isError) {
        return <h1>There was an unexpected error loading our impressive list of TV Shows. Try ... refreshing?</h1>
    }

    // 4. Show state in our JSX
    return (
        <>
            <h1>Tv Shows</h1>
            {tvShows.length === 0 && <p>Loading TV Shows...</p>}
            <ul>
                {tvShows.map(tvShow => (
                    <li key={tvShow.id}><Link to={`/tv-show/${tvShow.id}`}>
                            {tvShow.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {selectedTvShowId && <TvShow id={selectedTvShowId} />}
        </>
    );
}

export default TvShows;