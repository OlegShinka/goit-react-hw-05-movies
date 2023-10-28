import { useState } from 'react';
const SearchBar = ({ onChangeQuery }) => {
  const [value, setValue] = useState('');
  //контрольована форма
  const handleChange = evt => {
    const { value } = evt.target;
    setValue(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements;
    onChangeQuery(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          value={value}
          onChange={handleChange}
          autoComplete="true"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
