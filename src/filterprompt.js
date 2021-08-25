import React from 'react';

const Cuisine = ['All','Fast Food', 'American Food', 'Pizza', 'Asian', 'Dessert', 'Mexican', 'Breakfast'];

const renderCuisine = (cuisine) =>{
  return(
    cuisine === 'All' ?
      <div className = 'AllCuisines'>
        {cuisine}
      </div>
      : <div className = 'Cuisines'>
        {cuisine}
        </div>
    
  )
}

const FilterPrompt = (props) =>{
  return(
    <section className='active'>
      <div className='overlay' >
        <h2>Search filter</h2>
        <button className = 'closeFilter' onClick = {props.unfilter}>X</button>
        <br /><br />
        <h2>Sort by</h2>
        <div className = 'Filter'>
          <div className = 'SortbyImage' />
          <text className = 'SortbyName'>open</text>
        </div>
        <br />
        <h2>Cuisine</h2>
        <div className = 'Cuisine'>
          {Cuisine && Cuisine.map(cuisine => 
          {
            return renderCuisine(cuisine)
          })}
        </div>
        <p>Search filter</p>
        <button className = 'SeeMore' onClick = ''>v</button>
      </div>
    </section>
  )
}

export default FilterPrompt;