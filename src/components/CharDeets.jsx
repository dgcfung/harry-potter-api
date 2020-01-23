import React from 'react';

export default (props) => {


  return (
    <div>
      <p>{props.searchDeets && props.searchDeets[0].name}</p>
    </div>
  )
}