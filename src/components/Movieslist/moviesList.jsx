import { Link, useLocation } from 'react-router-dom';
import { List } from './moviesList.styled';
export const MoviesList = ({ results }) => {
  const location = useLocation();
  return (
    <div>
      {results.length !== 0 && (
        <List>
          {results.map(({ title, name, id }) => {
            if (title) {
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {name}
                  </Link>
                </li>
              );
            }
          })}
        </List>
      )}
    </div>
  );
};

export default MoviesList;
