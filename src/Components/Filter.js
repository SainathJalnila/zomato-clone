import React from 'react';
import '../Styles/filter.css';

class Filter extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Navbar-sec-start --> */}
    <div class="navbar">
        <div class="nav-logo">
                    <p class="small-logo">e!</p> 
        </div>
        <div class="op-btn-f">          
                <div class="pri-btn-f"> 
                        <a href="http://" target="_blank" rel="noopener noreferrer" class="L-btn-f">Login</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" class="L-btn-f  s-btn-f">Create New Account</a>  
                </div>
        </div>
    </div>
    {/* <!-- navbar-sec-ends --> */}

    {/* <!-- Heading-sec-start --> */}
        <div class="filter-Heading ml-5">
            <p>Breakfast  Places in Mumbai</p>
        </div>
    {/* <!-- Heading-sec-ends     --> */}

    {/* <!-- filter-sort-sec --> */}
        <div class="sec-1">            
             <div class="filter-secs">                
                <div class="label"> 
                    <span class="heading">Filter & Sort </span>
                    <span class="fad fa-angle-down "  id= "icons"data-toggle="collapse" data-target="#filter" ></span>
               </div>
               <div class="show" id="filter">
               <div class="label-1">
                    <p class="filter-loc menu-label ">Select Location</p> 
                        <select name="location" id=""  class="Location">
                           <option value="Select Location">Select Location</option>
                        </select>
                </div>
            <div class="checkBox-1">
                <div class="menu-label">Cuisine</div>
                <div class="filter-menu"> 
                    <input type="checkbox" name="North Indian" id="" class="filter-sec"/>
                    <p class="filter-sec" >North Indian</p>
                </div>
        
               <div class="filter-menu">
                <input type="checkbox" name="south Indian" id="" class="filter-sec"/> <p  class="filter-sec">South Indian</p>
               </div>
               <div class="filter-menu">
                <input type="checkbox" name="Chinese" id="" class="filter-sec" /><p class="filter-sec">Chinese</p>
               </div>
               <div class="filter-menu">
                <input type="checkbox" name="Chinese" id="" class="filter-sec" /><p class="filter-sec">Chinese</p>
               </div>
               <div class="filter-menu">
                   <input type="checkbox" name="Fast Food" id="" class="filter-sec"/><p class="filter-sec">fast Food</p>
               </div>
        
               <div class="filter-menu">
                <input type="checkbox" name="Street Food " id="" class="filter-sec"/><p class="filter-sec">Street Food</p>
               </div>
              
            </div>
            <div class="radio-sec">
                <div class="menu-label ">  <p class="menu-label-2">Cost of two</p> </div>
                <div class="filter-menu">
                    <input type="radio" name="price" id="" class="filter-sec"/> <p class="filter-sec">Less than 500</p>
                 </div>
                   <div class="filter-menu">
                    <input type="radio" name="price" id="" class="filter-sec"/> <p class="filter-sec"> 500 - 1000</p>
                </div>
                   <div class="filter-menu">
                    <input type="radio" name="price" id=""class="filter-sec" /> <p class="filter-sec">1000 - 1500</p>
                </div>
                   <div class="filter-menu">
                    <input type="radio" name="sort" id="" class="filter-sec"/><p class="filter-sec">Price Low to High</p>
                   </div>
            
                   <div class="filter-menu">
                    <input type="radio" name="price" id="" class="filter-sec"/> <p class="filter-sec">1500 - 2000</p>
                    </div>
                    <div class="filter-menu">
                        <input type="radio" name="price" id=""class="filter-sec"/> <p class="filter-sec">2000+</p>
                    </div>
            </div>
            <div class="sort-sec ">
                <div class="menu-label"><p class="menu-label-2">Sort</p></div>
                <div class="filter-menu">
                    <input type="radio" name="sort" id="" class="filter-sec"/><p class="filter-sec">Price High to Low</p>
                </div>
                <div class="filter-menu">
                    <input type="radio" name="sort" id="" class="filter-sec"/><p class="filter-sec">Price Low to High</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="filer-menu-sec">
        <div class="menu-sec-2">
           <div class="filter-img">
              <div class="img-sc">
                <img src="../Assets/breakfast.jpg" alt="" class="fl-img"/>
            </div>
            <div class="img-details">
                <h2 class="img-heading"> The Big  Cakery</h2>
                <div class="img-sub-heading">FORT</div>
                <div class="img-address">Shop-1 Plot D Samruddhi Complex Chincholi </div>
            </div>
          </div>
          <hr/>
          <div class="filter-details">
        <div class="filter-name">
            <div class="img-address">CUISINES</div>
            <div class="img-address">COST FOR TWO </div>
        </div>
        <div class="filter-cost-details">
            <div class="img-address txt-color">Bakery</div>
            <div class="img-address txt-color"> ₹700 </div>
        </div>
          </div>
        </div>
        <div class="menu-sec-2">
            <div class="filter-img">
                <div class="img-sc">
                  <img src="../Assets/breakfast.jpg" alt="" class="fl-img"/>
              </div>
              <div class="img-details">
                  <h2 class="img-heading"> The Bake Shop</h2>
                  <div class="img-sub-heading">FORT</div>
                  <div class="img-address">Shop-1 Plot D Samruddhi Complex Chincholi </div>
              </div>
            </div>
            <hr/>
            <div class="filter-details">
          <div class="filter-name">
              <div class="img-address">CUISINES</div>
              <div class="img-address">COST FOR TWO </div>
          </div>
          <div class="filter-cost-details">
              <div class="img-address txt-color">Bakery</div>
              <div class="img-address txt-color"> ₹700 </div>
          </div>
     </div>
     
     
        </div>
        <div class="menu-sec-2 menu-sec-mob">
            <div class="filter-img">
                <div class="img-sc">
                  <img src="../Assets/breakfast.jpg" alt="" class="fl-img"/>
              </div>
              <div class="img-details">
                  <h2 class="img-heading"> The Bake Shop</h2>
                  <div class="img-sub-heading">FORT</div>
                  <div class="img-address">Shop-1 Plot D Samruddhi Complex Chincholi </div>
              </div>
            </div>
            <hr/>
            <div class="filter-details">
          <div class="filter-name">
              <div class="img-address">CUISINES</div>
              <div class="img-address">COST FOR TWO </div>
          </div>
          <div class="filter-cost-details">
              <div class="img-address txt-color">Bakery</div>
              <div class="img-address txt-color"> ₹700 </div>
          </div>
     </div> 
        
       
     </div>
    
     <nav aria-label="Page navigation example "  class="Num-sec">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="www.google.com" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="www.google.com">1</a></li>
          <li class="page-item"><a class="page-link" href="www.google.com">2</a></li>
          <li class="page-item"><a class="page-link" href="www.google.com">3</a></li>
          <li class="page-item"><a class="page-link" href="www.google.com">4</a></li>
          <li class="page-item"><a class="page-link" href="www.google.com">5</a></li>
          <li class="page-item">
            <a class="page-link" href="www.google.com" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
            </div >
        )
    }
}

export default Filter;