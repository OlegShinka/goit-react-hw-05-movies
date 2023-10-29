import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetReviews } from 'components/api';
const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetReviews(movieId);
        setResults(responseData.results);
      } catch (error) {}
    }
    getResult();
  }, [movieId]);

  return (
    <div>
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
