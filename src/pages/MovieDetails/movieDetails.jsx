import { GetMovieDetails } from 'components/api';
import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [title, setTitle] = useState('');
  const [popularity, setPopularity] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [genresName, setGenresName] = useState('');
  const [genresSubName, setGenresSubName] = useState('');
  const location = useLocation();
  //'?.'-це так зв Елвіс, те саме location.state && location.state.from
  // в момент 1 рендеру useRef зберігає location звідки ми перейшли в MovieDetals
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const Pop = Math.round(popularity);
  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetMovieDetails(movieId);

        setTitle(responseData.title);
        setPopularity(responseData.popularity);
        setPoster(responseData.poster_path);
        setOverview(responseData.overview);
        setGenresName(responseData.genres[0].name);
        setGenresSubName(responseData.genres[1].name);
      } catch (error) {}
    }

    getResult();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h2> {title}</h2>
      <h3>User Scores: {`${Pop}%`} </h3>
      <h3>
        Genres: <span>{genresName}</span>
        <span> {genresSubName}</span>
      </h3>
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
      <p>About: {overview}</p>
      <Link to="cast">Cast </Link>
      <Link to="reviews">Reviews </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
