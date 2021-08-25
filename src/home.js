import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';
import SideBar from './sidebar';
import NavBar from './navbar';

var Details, specificRestaurant = 'NA';
const menu = [{'itemName': 'Chicken Grill',
                'itemPhoto': 'https://wallpapercave.com/wp/wp1874157.jpg',
                'itemCost': '$19.80',
                'itemCategory': ['Baked','Hot Dish'],
                'restaurantName': 'Burger Mania'
              },
              {'itemName': 'Char-Broiled Chichen Shish',
                'itemPhoto': 'https://wallpapercave.com/wp/wp1874157.jpg',
                'itemCost': '$22.89',
                'itemCategory': ['Sweet','Hot Dish'],
                'restaurantName': 'Burger Mania'
              },
              {'itemName': 'Natural Vegetable Rice',
              'itemPhoto': 'https://wallpapercave.com/wp/wp1874157.jpg',
              'itemCost': '$2.11',
              'itemCategory': ['Baked','Hot Dish'],
              'restaurantName': 'Burger Mania'
              }];

function renderRestaurant(restaurants){
  return(
    <div className = 'Restaurants' key = {restaurants.id} onClick = {() => selectRestaurant(restaurants)}>
      <img className = 'RestaurantImage' src = {restaurants.restaurantImage} alt = {restaurants.restaurantName}></img>
      <div className = 'Restaurant'>
        <h3 className = 'RestaurantName'>{restaurants.restaurantName}</h3>
        {restaurants.isOpen? 
          <p className = 'Open'>Open Now</p>
          : <p className = 'Closed'>Closed</p> }
      </div>
      <p>{restaurants.restaurantDescription}</p>
    </div>
  )
}

function selectRestaurant(restaurant){
  for(let i = 0; i < Details.length; ++i){
    if(Details[i].id === restaurant.id){
      specificRestaurant = Details[i];
      specificRestaurant['restaurantImage'] = restaurant.restaurantImage
      break;
    }
  }
}

function renderCategory(category){
  return(
    <div className = 'Categories'>
      <img className = 'CategoryImage' src = {category.image} alt = {category.name}></img>
      <text className = 'CategoryName'>{category.name}</text>
    </div>
  )
}

function renderMenu(item){
  if(item.restaurantName === specificRestaurant.restaurantName){
    return(
      <div className = 'MenuCard'>
        <img className = 'RestaurantImage' src = {item.itemPhoto} alt = {menu.itemName}></img>
        <div className = 'Restaurant'>
          <h3 className = 'RestaurantName'>{item.itemName}</h3>
          <h3 className = 'ItemCost'>{item.itemCost}</h3>
        </div>
      </div>
    )
  }
}
function handleBack(){
  specificRestaurant = 'NA';
}

function Home(props) {
  const [allRestaurants,setAllRestaurants]=useState([])
  
  useEffect(() => {
    fetchAllRestaurants();
  })

  useEffect(() => {
    console.log(allRestaurants)
  }, [allRestaurants])

  const [restaurantsDetails,setRestaurantsDetails]=useState([])
  
  useEffect(() => {
    fetchRestaurantsDetails();
  })

  useEffect(() => {
    console.log(restaurantsDetails)
  }, [restaurantsDetails])

  const allCategories = [{name: 'Baked', image: 'https://www.pngfind.com/pngs/m/340-3409823_carrows-restaurants-logo-png-transparent-carrows-restaurant-png.png'},
                          {name: 'Sweet', image: 'https://www.designyourway.net/blog/wp-content/uploads/2019/10/s1-3-7.jpg'},
                          {name: 'Hot Dish', image: 'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/381px-Pizza_Hut_logo.svg.png'},
                          {name: 'Fast Food', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1024px-McDonald%27s_Golden_Arches.svg.png'},
                          {name: 'Salads', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1024px-McDonald%27s_Golden_Arches.svg.png'}]

  

  const fetchAllRestaurants=async()=>{
    const response=await Axios('https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants');
    console.log(response.data['allRestaurants'])
    setAllRestaurants(response.data['allRestaurants'])
  }

  const fetchRestaurantsDetails=async()=>{
    const response=await Axios('https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails');
    console.log(response.data['restaurantDetails'])
    setRestaurantsDetails(response.data['restaurantDetails'])
  }
  Details = restaurantsDetails;

  return (
    specificRestaurant === 'NA' ?
      <div className='pomoco'>
        <SideBar />
        <div className = 'Main'>
          <NavBar filter = {props.filter} back = {handleBack()} />
          <h2>Category</h2>
          <div className = 'Category'>
            {allCategories && allCategories.map(category => 
            {
              return renderCategory(category)
            })}
          </div>
          <h2>Restaurants</h2>
          <div className = 'allRestaurants'>
            <br />
            {allRestaurants && allRestaurants.map(restaurants => 
            {
              return renderRestaurant(restaurants)
            })}
          </div>
        </div>
      </div>
      : <div className='pomoco'>
          <SideBar />
          <div className = 'Main'>
          <NavBar unfilter = 'NA' back = {handleBack()} />
          <div className = 'Specific'>
            <div className = 'SpecificLeft'>
              <h1>{specificRestaurant.restaurantName}</h1>
              <p>{specificRestaurant.restaurantDescription}</p>
              <p>{specificRestaurant.openingHours}</p>
              <p>{specificRestaurant.contactNumber}</p>
              <p>{specificRestaurant.websiteUrl}</p>
            </div>
            <img className = 'SpecificRight' src = {specificRestaurant.restaurantImage} alt = {specificRestaurant.restaurantName} />           
          </div>
          Item Categories
          <h2>Menu</h2>
          <div className = 'allRestaurants'>
            <br />
            {menu && menu.map(item => 
            {
              return renderMenu(item)
            })}
          </div>
          </div>
        </div>
  );
}

export default Home;