import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearch } from './hooks';
import DebounceInput from 'react-debounce-input';
import './styles/_search.scss';

function Search(props) {
  const { input, setInput } = useSearch();
  const { placeholder } = props;

  function searchForCommic(evt) {
    setInput(evt.target.value);
  }

  useEffect(() => {
    const { updateFilter} = props;
    updateFilter(input);
  }, [props, input]);

  return (
    <div className="search">
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        placeholder={placeholder}
        value={input}
        onChange={searchForCommic} />
    </div>
  );
}

Search.prototype = {
  placeholder: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired
}

export default Search;
