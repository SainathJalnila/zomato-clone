import React from 'react';
import '../Styles/filter.css';
import queryString from 'query-string';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class Filter extends React.Component {
   
    constructor() {
        super();
        this.state = {
            restaurants: [],
            locations:[],
            pageCount: Number,
            mealtype: undefined,
            location: undefined,
            cuisine : undefined,
            lCost: undefined,
            hCost:undefined,
            sort: 1,
            page: 1,
        

        }
    

    }

    
    componentDidMount() {
        
        const qs = queryString.parse(this.props.location.search);
        const { mealtypes ,location } = qs;

        const filterObj = {
            mealtype: mealtypes,
            location:location
        };

        axios({
            url: 'https://sheltered-bastion-74022.herokuapp.com/api/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj 
        })
            .then(res => {
                this.setState({ restaurants: res.data.FilterData , mealtype:  mealtypes , location:location  , pageCount: res.data.data})
            })
            .catch(err => console.log(err))

            axios({
                url:' https://sheltered-bastion-74022.herokuapp.com/api/location',
                method:'GET',
                headers:{'Content-Type': 'application/json'}
            })
            .then(res => {
                this.setState({ locations: res.data.location });           
                }).catch(err => console.log(err));
    }
    handleSortMethod= (sort) => { 
       
        const {mealtype , location , cuisine ,lCost , hCost  , page} = this.state;
        const filterObj = {
            mealtype: mealtype,
            sort: sort,
            location:location,
            cuisine:cuisine,
            lcost: lCost, 
            hcost:hCost,
            page:page
        };
    
        axios({
            url: 'https://sheltered-bastion-74022.herokuapp.com/api/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(res => {
                this.setState({ restaurants: res.data.FilterData , sort , pageCount: res.data.data })
            })
            .catch(err => console.log(err))
    }
    handleCostChange = (lcost, hcost) => {
        const { mealtype, cuisine, location, sort, page } = this.state;

        const filterObj = {
            mealtype: mealtype,
            sort: sort,
            location:location,
            cuisine:cuisine,
            lcost: lcost, 
            hcost:hcost,
            page:page,
        };

        axios({
            url: 'https://sheltered-bastion-74022.herokuapp.com/api/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(res => {
                this.setState({ restaurants: res.data.FilterData, lcost, hcost , pageCount: res.data.data });

            })
            .catch(err => console.log(err))
    }
    handleMealtype = (cuisine) => {
        const { mealtype, location, sort, lcost , hcost ,page } = this.state;

        const filterObj = {
            mealtype: mealtype,
            sort: sort,
            location:location,
            cuisine:cuisine,
            lcost: lcost, 
            hcost:hcost,
            page:page
        };

        axios({
            url: 'https://sheltered-bastion-74022.herokuapp.com/api/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(res => {
                this.setState({ restaurants: res.data.FilterData, cuisine , pageCount: res.data.data });

            })
            .catch(err => console.log(err))
    }
    handleLocMethod = (event) => {
        const location = event.target.value;
        const { mealtype, sort, lcost ,cuisine, hcost ,page } = this.state;
    
        const filterObj = {
            mealtype: mealtype,
            sort: sort,
            location:location,
            cuisine:cuisine,
            lcost: lcost, 
            hcost:hcost,
            page:page
        };

        axios({
            url: 'https://sheltered-bastion-74022.herokuapp.com/api/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(res => {
                this.setState({ restaurants: res.data.FilterData, location , pageCount: res.data.data });

            })
            .catch(err => console.log(err))
            
    }
    handlRestoDetails = (restoID) =>{
        this.props.history.push(`/details?restoID=${restoID}`);

    };
    handlePageClick = (page) => {
        const data = page.selected +1 ;
       const { mealtype, sort, lcost ,cuisine, hcost  , location , pageCount } = this.state;
    
        const filterObj = {
            mealtype: mealtype,
            sort: sort,
            location:location,
            cuisine:cuisine,
            lcost: lcost, 
            hcost:hcost,
            page:data,
            pageCount:pageCount
        };

        axios({
            url: 'https://sheltered-bastion-74022.herokuapp.com/api/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(res => {
                this.setState({ restaurants: res.data.FilterData, pageCount : res.data.data });
            })
            .catch(err => console.log(err))
            
            
    }
    
    render() {
        const {restaurants, locations , pageCount } = this.state;
       
        
      
        return (
            <div>
  

    {/* <!-- Heading-sec-start --> */}
        <div className="filter-Heading ml-5">
            <p>Breakfast  Places in Mumbai</p>
        </div>
    {/* <!-- Heading-sec-ends     --> */}

    {/* <!-- filter-sort-sec --> */}
        <div className="sec-1">            
             <div className="filter-secs">                
                <div className="label"> 
                    <span className="heading">Filter & Sort </span>
                    <span className="fad fa-angle-down "  id= "icons"data-toggle="collapse" data-target="#filter" ></span>
               </div>
               <div className="show" id="filter">
               <div className="label-1">
                    <p className="filter-loc menu-label ">Select Location</p> 
                        <select name="location" id=""  className="Location" onChange = {this.handleLocMethod}>
                        <option value="Select Location" >Select Location</option>
                            {locations.map((item)=> {
                              return  <option value= {item.location_id}>{item.name}, {item.city}</option>

                            })}
                           
                        </select>
                </div>
            <div className="checkBox-1">
                <div className="menu-label">Cuisine</div>
                <div className="filter-menu"> 
                    <input type="checkbox" name="North Indian" id="" onChange={()=>this.handleMealtype(1)} className="filter-sec"/>
                    <p className="filter-sec" >North Indian</p>
                </div>
        
               <div className="filter-menu">
                <input type="checkbox" name="south Indian" id=""  onChange={()=>this.handleMealtype(2)}  className="filter-sec"/> <p  className="filter-sec">South Indian</p>
               </div>
               <div className="filter-menu">
                <input type="checkbox" name="Chinese" id=""  onChange={()=>this.handleMealtype(3)}  className="filter-sec" /><p className="filter-sec">Chinese</p>               </div>
               <div className="filter-menu">
                   <input type="checkbox" name="Fast Food" id=""  onChange={()=>this.handleMealtype(4)} className="filter-sec"/><p className="filter-sec">fast Food</p>
               </div>
        
               <div className="filter-menu">
                <input type="checkbox" name="Street Food " id="" onChange={()=>this.handleMealtype(5)} className="filter-sec"/><p className="filter-sec">Street Food</p>
               </div>
              
            </div>
            <div className="radio-sec">
                <div className="menu-label ">  <p className="menu-label-2">Cost of two</p> </div>
                <div className="filter-menu">
                    <input type="radio" name="price" id="" onChange={()=>this.handleCostChange(1,500)} className="filter-sec"/> <p className="filter-sec">Less than 500</p>
                 </div>
                   <div className="filter-menu">
                    <input type="radio" name="price" id="" onChange={()=>this.handleCostChange(500,1000)} className="filter-sec"/> <p className="filter-sec"> 500 - 1000</p>
                </div>
                   <div className="filter-menu">
                    <input type="radio" name="price" id=""  onChange={()=>this.handleCostChange(1000,15000)} className="filter-sec" /> <p className="filter-sec">1000 - 1500</p>
                </div>
                   <div className="filter-menu">
                    <input type="radio" name="price" id="" onChange={()=>this.handleCostChange(1500,2000)}  className="filter-sec"/> <p className="filter-sec">1500 - 2000</p>
                    </div>
                    <div className="filter-menu">
                        <input type="radio" name="price" id="" onChange={()=>this.handleCostChange(2000,50000)}className="filter-sec"/> <p className="filter-sec">2000+</p>
                    </div>
            </div>
            <div className="sort-sec ">
                <div className="menu-label"><p className="menu-label-2">Sort</p></div>
                <div className="filter-menu">
                    <input type="radio" name="sort" id="" onChange={() => this.handleSortMethod(-1)} className="filter-sec"/><p className="filter-sec">Price High to Low</p>
                </div>
                <div className="filter-menu">
                    <input type="radio" name="sort"   onChange={() => this.handleSortMethod(1)} id="" className="filter-sec"/><p className="filter-sec">Price Low to High</p>
                </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="filer-menu-sec">
    {restaurants.length !==0 ? restaurants.map(item=>{
        return  <div className="menu-sec-2" onClick={()=>this.handlRestoDetails(item._id)}>
           <div className="filter-img">
              <div className="img-sc">
                <img src={`./${item.image}`} alt="" className="fl-img"/>
            </div>
            <div className="img-details">
                <h2 className="img-heading"> {item.name}</h2>
                <div className="img-sub-heading">{item.locality}</div>
                <div className="img-address">{item.city} </div>
            </div>
          </div>
          <hr/>
          <div className="filter-details">
        <div className="filter-name">
            <div className="img-address">CUISINES</div>
            <div className="img-address">COST FOR TWO </div>
        </div>
        <div className="filter-cost-details">
            <div className="img-address txt-color">{item.cuisine.map((data)=> `${data.name}, `)}</div>
            <div className="img-address txt-color"> {item.min_price} </div>
        </div>
          </div>
        </div>
         }) : <div id="No-data"> <p>No Data Found</p> </div>    }
     
    
     {restaurants.length !==0 ?     
      <ReactPaginate
      previousLabel={"pre"}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount= {pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      onPageChange={this.handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}

       
      />
   
      : null} 
     
    </div>
   </div >
        )
    }
}

export default Filter;