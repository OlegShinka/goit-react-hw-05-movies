import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ results }) => {
  const location = useLocation();
  return (
    <div>
      {results.length !== 0 && (
        <ul>
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
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
