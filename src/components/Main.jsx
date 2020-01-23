import React from 'react';
import Search from './Search';
import CharDeets from './CharDeets';

export default (props) => {
  return (
    <div>
      <Search searchInput={props.searchInput} handleClick={props.handleClick} handleChange={props.handleChange} />
      <CharDeets searchDeets={props.searchDeets} />
    </div>
  )
}