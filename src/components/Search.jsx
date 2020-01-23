import React from 'react';

export default (props) => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}
        />
        <button onClick={props.handleClick}>Go</button>
      </form>
    </div>
  )
}