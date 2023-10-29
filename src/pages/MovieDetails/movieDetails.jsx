import { GetMovieDetails } from 'components/api';
import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  NavLink,
} from 'react-router-dom';
import { Loader } from 'components/Loader/loader';
import styled from 'styled-components';
import { Container, List } from './movieDetails.styled';

const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 35px;
  text-decoration: none;
  &.active {
    color: cadetblue;
  }
`;
const MovieDetails = () => {
  const { movieId } = useParams();

  const [title, setTitle] = useState('');
  const [popularity, setPopularity] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [genresName, setGenresName] = useState('');
  const [genresSubName, setGenresSubName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  //'?.'-це так зв Елвіс, те саме location.state && location.state.from
  // в момент 1 рендеру useRef зберігає location звідки ми перейшли в MovieDetals
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const Pop = Math.round(popularity);
  useEffect(() => {
    async function getResult() {
      try {
        setLoading(true);
        setError(false);
        const responseData = await GetMovieDetails(movieId);

        setTitle(responseData.title);
        setPopularity(responseData.popularity);
        setPoster(responseData.poster_path);
        setOverview(responseData.overview);
        setGenresName(responseData.genres[0].name);
        setGenresSubName(responseData.genres[1].name);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getResult();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p> Reload page please ...</p>}
      <Link to={backLinkLocationRef.current}>
        <button>Go back</button>
      </Link>
      <Container>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        </div>
        <div>
          <h2> {title}</h2>
          <h4>User Scores: {`${Pop}%`} </h4>
          <h3>Genres:</h3> <span>{genresName}</span>
          <span> {genresSubName}</span>
          <p>
            <h2>Overview </h2>
            {overview}
          </p>
        </div>
      </Container>
      <h4>Additional information</h4>
      <List>
        <li>
          <StyledLink to="cast">Cast </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews </StyledLink>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
