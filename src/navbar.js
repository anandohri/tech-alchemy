import React from 'react';

const NavBar = (props) =>{
  return(
    <div className='NavBar'>
      <button className = 'NavBarLeft' onClick = {props.back}></button>
      {props.unfilter !== 'NA' ?
      <React.Fragment>
        <input className = 'SearchBar' type = 'text' placeholder = 'Search for Restaurants (Press Enter to Search)'/>
        <button className = 'NavBarRightFilter' onClick = {props.filter}></button>
      </React.Fragment>
      : <React.Fragment />}
      <button className = 'NavBarRightCart' onClick = {props.back}></button>
    </div>
  )
}

export default NavBar;