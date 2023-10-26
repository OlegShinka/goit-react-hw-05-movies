export const SearchBar = ({ value, onChangeQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChangeQuery(e.target.value)}
        autoComplete="true"
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
