import { useState } from 'react';
import { BtnSearchBar, InpSearch, FormSearch } from './searchBar.styled';
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
      <FormSearch onSubmit={handleSubmit}>
        <InpSearch
          type="text"
          name="value"
          value={value}
          onChange={handleChange}
          autoComplete="true"
        />
        <BtnSearchBar type="submit">Search</BtnSearchBar>
      </FormSearch>
    </div>
  );
};

export default SearchBar;
