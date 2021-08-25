import React from 'react';

const SideBar = () =>{
  return(
    <div className='SideBar'>
      <h2><img className = 'logo' src = 'https://wallpapercave.com/wp/wp2038161.jpg' alt = 'logo' width = '45px' height = '35px'/>Pomo & Co</h2>
      <br /><br />
      <button className = 'SideBarOptionsSelected'>Home</button>
      <button className = 'SideBarOptionsUnselected'>Orders</button>
      <button className = 'SideBarOptionsUnselected'>Notification</button>
      <button className = 'SideBarOptionsUnselected'>Help & Support</button>
      <button className = 'SideBarOptionsUnselected'>Settings</button>
    </div>
  )
}

export default SideBar;