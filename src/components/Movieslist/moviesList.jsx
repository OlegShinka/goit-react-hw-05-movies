export const MoviesList = ({ results }) => {
  console.log('2--->', results);
  return (
    <div>
      <h2>list:</h2>

      {/* <ul>
        {results.map(results => (
          <li key={results.id}>
            <h2>{results.title}</h2>
          </li>
        ))}
      </ul> */}

      {results.map(({ id, title }) => (
        <div key={id}>
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
};
