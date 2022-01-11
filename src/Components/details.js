import React from 'react';
import queryString from 'query-string';
import '../Styles/details.css';
import Modal from 'react-modal';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'60%'
    },
  };
  const customStyless = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'30%'
    },
  };

class details extends React.Component {
    constructor(){
        super();
        this.state =  {
            restaurant: {},
            galleryModelOpen : false,
            restID : undefined, 
            MenuModelOpen: false,
            formModalIsOpen:false,
            menuItem:[],
            subTotal:0,
            userName: undefined,
            userEmail: undefined,
            userAddress: undefined,
            userContact: undefined
        }
    }
    componentDidMount(){
        const qs = queryString.parse(this.props.location.search);
        const { restoID: restaurant } = qs;
        axios({
            url: `https://sheltered-bastion-74022.herokuapp.com/api/restaurant/${restaurant}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                this.setState({ restaurant: res.data.RestaurantById, resID : restaurant })
            })
            .catch(err => console.log(err))
    }
    handleGallery = (state , value) =>{
        const {resID} = this.state;
        if(state === "MenuModelOpen" && value === true){
            axios({
                url: `https://sheltered-bastion-74022.herokuapp.com/api/itemDetails/${resID}`,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res=>{
                this.setState({menuItem : res.data.RestaurantById})
            }).catch(err=> console.log(err));
        }
         this.setState({[state]: value});  
    }
    addItem = (index , operationType) =>{
        let total =0;
        const items = [...this.state.menuItem];
        const item = items[index];
        if(operationType === 'add')
        {
            item.qty+=1;
        }else
        {

            item.qty-=1;
        }
        items[index] =item;
        items.map((item)=>{
            return total += item.qty * item.price;
        })
        this.setState({menuItem : items , subTotal:total});
    }
    handleFormDataChange = (event, state) => {
        this.setState({ [state]: event.target.value });
    }
    isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    }

    isObj = (val) => {
        return typeof val === 'object'
    }

    stringifyValue = (val) => {
        if (this.isObj(val) && !this.isDate(val)) {
            return JSON.stringify(val)
        } else {
            return val
        }
    }

    buildForm = ({ action, params }) => {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)

        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', this.stringifyValue(params[key]))
            form.appendChild(input)
        })
        return form
    }

    post = (details) => {
        const form = this.buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }

    getData = (data) => {
        return fetch(`https://sheltered-bastion-74022.herokuapp.com/api/payment`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).catch(err => console.log(err))
    }
    handlePayment = () => {
        const { subTotal, userEmail } = this.state;
        if (!userEmail) {
            alert('Please fill this field and then Proceed...');
        }
        else {
            // Payment API Call 
            const paymentObj = {
                amount: subTotal,
                email: userEmail
            };

            this.getData(paymentObj).then(response => {
                var information = {
                    action: "https://securegw-stage.paytm.in/order/process",
                    params: response
                }
                this.post(information)
            })
        }
    }

    render() {
        const { restaurant, galleryModelOpen , formModalIsOpen , MenuModelOpen, menuItem ,subTotal} = this.state;
        return (
           
          <div>
            <div className ="container">
                <div className="Image-silder rounded border mt-2 bg-grey">
                        <img src= {`./${restaurant.image}`} alt="" srcset="" className="details-img"/>
                </div>
                <div className = "gallery-button">                    
                    <p id="gallery-btn" onClick={() => this.handleGallery('galleryModelOpen' , true)}>             
                  Click to see image gallery </p> 
                </div>
                <div className="details-heading   ">{restaurant.name}  <p id ="place-btn" onClick={() => this.handleGallery('MenuModelOpen' , true)} className = "rounded">Place online order</p></div>
                <div className="resto_details-btn mt-2">
                <div className="tabs">
                    <div className="tab">
                        <input type="radio" id="tab-1" name="tab-group-1" checked />
                        <label for="tab-1">Overview</label>

                        <div className="content">
                            <div className="about">About this place</div>
                            <div className="head">Cuisine</div>
                            <div className="value">{restaurant && restaurant.cuisine && restaurant.cuisine.map(cuisine => `${cuisine.name}, `)}</div>
                            <div className="head">Average Cost</div>
                            <div className="value">&#8377; {restaurant.min_price} for two people(approx)</div>
                        </div>
                    </div>

                    <div className="tab">
                        <input type="radio" id="tab-2" name="tab-group-1" checked  />
                        <label for="tab-2">Contact</label>
                        <div className="content">
                            <div className="head">Phone Number</div>
                            <div className="value"> {`+91 ${restaurant.contact_number}`}</div>
                            <div className="head">{restaurant.name}</div>
                            <div className="value">{`${restaurant.locality}, ${restaurant.city}`}</div>
                        </div>
                       </div> 
                    </div>
                  
                    <div>
                   
               </div> 
                </div>
              
               <Modal isOpen={galleryModelOpen} style={customStyles}>
                    <div>                    
                        <div class="fas fa-times" style={{ float: 'right', marginBottom: '10px' , cursor:'pointer' }} onClick={() => this.handleGallery('galleryModelOpen', false)}></div>
                        <Carousel
                            showThumbs={false} >
                            {restaurant && restaurant.thumb && restaurant.thumb.map((item ) => {
                                return <div>
                                    <img src={`../${item}`}  alt =""/>
                                </div>
                            })}
                        </Carousel>                       
                    </div>
                </Modal>   
                <Modal isOpen={MenuModelOpen} style={customStyless}>
                    <div>  
                        <h2>subTotal : {subTotal} </h2>  
                        <button className="btn btn-danger rounded" onClick={() => {this.handleGallery('menuItemsModalIsOpen', false); this.handleGallery('formModalIsOpen', true);}}>Pay Now</button>        
                        <div class="fas fa-times" style={{ float: 'right', marginBottom: '10px' }} onClick={() => this.handleGallery('MenuModelOpen', false)}></div>
                       <div>{menuItem.map((item , index)=>{
                        return <div>
                            
                           <div className="row mt-1">
                              
                            <div className="col-lg-3 col-md-3 col-sm-3 menu-details ">
                                    <img src={`./${item.image}`} alt="menu-img" className="menu-img"/>                             
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 menu-details ">                               
                                <div className="menu-resto-name">{item.name}</div>
                                <p className="menu-resto-desc">{item.description}</p>
                                <p className="menu-resto-price">Cost for Two &#8377; :{item.price}</p>                              
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                               {item.qty === 0 ? <div><button id="menu-add" onClick={()=>this.addItem(index , 'add')}>Add 
                                <i class="fa fa-plus ml-1" aria-hidden="true"></i>
                                </button></div>  : <div className = "mt-5">
                                <button id="add-sub-btn" onClick={()=>this.addItem(index , 'sub')}>- </button>
                                <span id="item-qty">{item.qty}</span>
                                <button id="add-sub-btn" onClick={()=>this.addItem(index , 'add')}>+ </button>
                                </div>}
                            </div>
                         </div>
                           <hr/>
                    
                        </div> 
                         
                       })}</div>                  
                    </div>
                </Modal>   
                <Modal
                    isOpen={formModalIsOpen}
                    style={customStyles}
                >
                    <div>
                        <div class="glyphicon glyphicon-remove" style={{ float: 'right', marginBottom: '10px' }}
                            onClick={() => this.handleGallery('formModalIsOpen', false)}></div>
                        <h2>{restaurant.name}</h2>
                        <div>
                            <label>Name : </label>
                            <input class="form-control" style={{ width: '400px' }}
                                type="text" placeholder="Enter your Name" onChange={(event) => this.handleFormDataChange(event, 'userName')} />
                        </div>
                        <div>
                            <label>Email : </label>
                            <input class="form-control" style={{ width: '400px' }}
                                type="text" placeholder="Enter your Email" onChange={(event) => this.handleFormDataChange(event, 'userEmail')} />
                        </div>
                        <div>
                            <label>Address: </label>
                            <input class="form-control" style={{ width: '400px' }}
                                type="text" placeholder="Enter your Address" onChange={(event) => this.handleFormDataChange(event, 'userAddress')} />
                        </div>
                        <div>
                            <label>Contact Number : </label>
                            <input class="form-control" style={{ width: '400px' }}
                                type="tel" placeholder="Enter your Contact Details" onChange={(event) => this.handleFormDataChange(event, 'userContact')} />
                        </div>
                        <button class="btn btn-success"
                            style={{ float: 'right', marginTop: '20px' }} onClick={this.handlePayment}>Proceed</button>
                    </div>
                </Modal>        
            </div>     
       </div>
          
           
        );
    }
}

export default details;