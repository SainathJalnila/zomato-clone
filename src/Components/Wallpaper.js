import React from 'react';
import '../Styles/home.css';


class Wallpaper extends React.Component {
    render() {
        return (
            <div>
                <div class="main-sec" style = {{backgroundImage : `url('./Assets/homepageimg.png')`}}>
       <div class="op-btn">
        <div class="pri-btn"> 
            <a href="http://" target="_blank" rel="noopener noreferrer" class="L-btn">Login</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="L-btn  s-btn">Create New Account</a>  
    </div>  
     <div class="logo" >
      <p class="logo-txt" >e!</p> 
     </div> 
     <div class="Tag-line">
        Discover the best food & drinks  , restaurant, cafes and bars
     </div>       
     <div class="search-sec">
          <div class="location">
            <i class="fas fa-map-marker-alt location-icon"></i> 
            <select name="" id="">
                <option value="">Select the location</option>
            </select> 
            <i class="fas fa-horizontal-rule hori-line"></i>
          </div>
          <div class="search-bar">
            <i class="fal fa-search search-icon"></i>
              <input type="search" name="search" id="" placeholder="Search For Restaurant "/>
          </div>         
        </div>
       </div>
   </div>
            </div>

        )
    }
}

export default Wallpaper;