import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetReviews } from 'components/api';
import { Loader } from 'components/Loader/loader';

const Reviews = () => {
  const { movieId } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notInfo, setNotInfo] = useState(false);
  console.log(notInfo);
  useEffect(() => {
    async function getResult() {
      try {
        setLoading(true);
        setError(false);
        const responseData = await GetReviews(movieId);
        setResults(responseData.results);
        console.log(responseData.results.length);
        if (results.length === 0) {
          setNotInfo(true);
        } else {
          setNotInfo(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getResult();
  }, [movieId, results.length]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p> Reload page please ...</p>}
      {notInfo && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {results.map(item => (
          <li key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
