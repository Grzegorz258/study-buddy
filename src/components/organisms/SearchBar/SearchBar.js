import React from 'react';
import { Input } from 'components/atoms/Input/input';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

export default SearchBar;
