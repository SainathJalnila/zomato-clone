import React from "react";
import "../Styles/home.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
import Model from "react-modal";
import GoogleButton from "react-google-button";
 

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "32%",
    borderRadius: "10px",
  },
};

class Wallpaper extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      inputText: undefined,
      suggestion: [],
      loginOpenModel: false,
      SignupOpenModel: false,
      email: undefined,
      password: undefined,
      mobileNumber:undefined,
      fullName: undefined,
      isloogedIn: false,
      loginUser: undefined,
      message: undefined,
      isUserAuthenticated: false
      
    };
  }

  handleNavigate = (event) => {
    const location_id = event.target.value;
    sessionStorage.setItem("locationId", location_id);

    axios({
      url: `https://sheltered-bastion-74022.herokuapp.com/api/getrestaurantByLocID/${location_id}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        this.setState({ restaurant: res.data.restaurantData });
      })
      .catch((err) => console.log(err));
  };
  handleRestoDataByLo = (event) => {
    const { restaurant } = this.state;
    const inputText = event.target.value;

    let suggestion = [];
    suggestion = restaurant.filter((item) =>
      item.name.toLowerCase().includes(inputText.toLowerCase())
    );
    this.setState({ inputText, suggestion });
  };

  selectRestaurantItem =(restoID) =>{
    this.props.history.push(`/details?restoID=${restoID}`);

};

  showSuggestion = () => {
    const { suggestion, inputText } = this.state;
    if (suggestion.length === 0 && inputText === undefined) {
      return null;
    }
    if (suggestion.length > 0 && inputText === "") {
      return null;
    }
    if (suggestion.length === 0 && inputText) {
      return (
        <ul>
          <li>No Search Result Found</li>
        </ul>
      );
    }
    return (
      <div>
        <h1>Resto avaiable at this place </h1>
        {suggestion.map((item, index) => (
          <div style={{ display: "inline-block", width: "30%" }}>
            <div
              className="rectangle-sec"              
              onClick={()=>this.selectRestaurantItem(item._id)}
              key={index}
            >
              <div className="img-sec">
                <img src={`./${item.image}`} alt="" srcset="" />
              </div>
              <div className="text-sec">
                <h3 className="text-1">{item.name}</h3>
                <p className="text-2">{item.locality}</p>
                <p className="text-2">
                  {" "}
                  Cost for Two : &#8377; {item.min_price}
                </p>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    );
  };
  responseGoogle = (response) => {
    this.setState({loginUser : response.profileObj.name , loginOpenModel: false , isloogedIn: true})
  };
 responseFacebook = (response) => {
    console.log(response);
  };
  componentClicked = () => console.log("clicked");
  handleLogout = () =>{
    this.setState({isloogedIn: false , loginUser: undefined});
    console.log("clicked ")
  }

  handleGallery = (state, value) => {
    this.setState({ [state]: value });
  };
  handleFormMethod= (event) => { 
       
   
    const input = event.target;
    const name = input.name;
    const value = input.value;
    this.setState({[name] : value}) 
    
}
handleSignSubmit = (event) =>{
  const {email , password , fullName , mobileNumber} = this.state;  
  let SignObj = {
    email : email,
    password : password,
    mobileNumber : mobileNumber,
    fullName : fullName,
  };
     
   axios({
        url: 'https://sheltered-bastion-74022.herokuapp.com/api/signup',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: SignObj
    })
        .then(res => {
            this.setState({  email , password , mobileNumber , fullName })
        })
        .catch(err => console.log(err))
}
handleLoginSubmit = (event) =>{
  const {email , password  , message} = this.state;  
  let loginObj = {
    email : email,
    password : password,
    message: message
    
   
  };
  axios({
    url:'https://sheltered-bastion-74022.herokuapp.com/api/login',
    method:'POST',
    headers: {'content-Type':'application/json'},
    data : loginObj
}) 
    .then(res=>{

              if(res.data.isAuthenticated===true){
            this.setState({loginOpenModel:false,isloogedIn:true,loginUser:loginObj.email})
            sessionStorage.setItem('User',loginObj.email)
        }
        else{
            this.setState({loginOpenModel:true,isUserAuthenticated:true})
           
        }
     }) 
    .catch(err => console.log(err));  
}
  render() {
    const { locationsData } = this.props;
    const { loginOpenModel, SignupOpenModel , isloogedIn , loginUser  , message} = this.state;
    console.log(isloogedIn);
    
    return (
      <div>
        <div
          className="main-sec"
          style={{ backgroundImage: `url('./Assets/home.png')` }}
        >
          <div className="op-btn">
          
            <div className="logo">
              <p className="logo-txt">e!</p>
            </div>
            <div className="Tag-line">
              Discover the best food & drinks , restaurant, cafes and bars
            </div>
            <div className="search-sec">
              <div className="location">
                <i className="fas fa-map-marker-alt location-icon"></i>
                <select
                  className=""
                  name="country"
                  onChange={this.handleNavigate}
                >
                  <option value="0">select</option>
                  {locationsData.map((item) => {
                    return (
                      <option
                        value={item.location_id}
                      >{`${item.name}, ${item.city}`}</option>
                    );
                  })}
                </select>
                <i className="fas fa-horizontal-rule hori-line"></i>
              </div>
              <div className="search-bar">
                <i className="fal fa-search search-icon"></i>
                <input
                  type="search"
                  name="search"
                  id=""
                  placeholder="Search For Restaurant "
                  onChange={this.handleRestoDataByLo}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">{this.showSuggestion()}</div>
        <Model isOpen={loginOpenModel} style={customStyles}>
          <div
            className="fas fa-times"
            style={{ float: "right", marginBottom: "10px" }}
            onClick={() => this.handleGallery("loginOpenModel", false)}
          ></div>
          <div>
            <h6 className="font-weight-bold" style={{ color: "darkblue" }}>
              Login with Zomato
            </h6>
            <hr />
            <form style={{ color: "darkblue" }} onSubmit={this.handleLoginSubmit} >
              <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Required"
                  value={this.state.email}
                  onChange={this.handleFormMethod}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  className="form-control form-input"
                  id="exampleInputPassword1"
                  placeholder="Required"
                  value={this.state.password}
                  onChange={this.handleFormMethod}
                  autoComplete="off"
                />
              
              </div>
              <div className="form-check mt-1 mb-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label " for="exampleCheck1">
                  remember me{" "}
                </label>
                <a href="www.google.com" className="link-primary float-right">
                  Forgot password ?{" "}
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-normal"
                id="login-btn"
              >
                {" "}
                Log In{" "}
              </button>
              <div className="text-center">
                {" "}
                <a
                   href="www.google.com"
                  className="link-danger "
                  onClick={() => {
                    this.handleGallery("loginOpenModel", false);
                    this.handleGallery("SignupOpenModel", true);
                  }}
                >
                  Register new account{" "}
                </a>
                <span style={{color:'blue'}}>{message}</span>
              </div>
            </form>
            <hr className="hr-text" data-content="OR Login With " />
            <GoogleLogin
              clientId="843451857206-ctc7i6t3u49f1v07bu9a1dacl05k9ivh.apps.googleusercontent.com"
              render={(renderProps) => (
                <GoogleButton
                  onClick={renderProps.onClick}
                  style={{
                    borderRadius: "5px",
                    display: "inline-block",
                    width: "48%",
                  }}
                >
                  This is my custom Google button
                </GoogleButton>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
         
          </div>
        </Model>
        <Model isOpen={SignupOpenModel} style={customStyles}>
          <div
            className="fas fa-times"
            style={{ float: "right", marginBottom: "10px" }}
            onClick={() => this.handleGallery("SignupOpenModel", false)}
          ></div>
          <div>
            <h6 className="font-weight-bold" style={{ color: "darkblue" }}>
              Sign Up with Zomato
            </h6>
            <hr />
            <form style={{ color: "darkblue" }} onSubmit={this.handleSignSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input
                  type="email"
                  className="form-control form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Required"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleFormMethod}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Mobile Number</label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Required"
                  name="mobileNumber"
                  value={this.state.mobileNumber}
                  onChange={this.handleFormMethod}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Required"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleFormMethod}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">PASSWORD</label>
                <input
                  type="password"
                  className="form-control form-input"
                  id="exampleInputPassword1"
                  placeholder="Required"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleFormMethod}
                />
              </div>
              <button type="submit" className="btn btn-primary" id="signup-btn">
                {" "}
                Create New Account{" "}
              </button>
              <div className="text-center">
                {" "}
                <a  href="www.google.com" className="link-danger font-weight-normal ">
                  Already have a account{" "}
                </a>
              </div>
            </form>
            <hr className="hr-text" data-content="OR SIGN UP  With " />
            <GoogleLogin
              clientId="843451857206-ctc7i6t3u49f1v07bu9a1dacl05k9ivh.apps.googleusercontent.com"
              render={(renderProps) => (
                <GoogleButton
                  onClick={renderProps.onClick}
                  style={{
                    borderRadius: "5px",
                    display: "inline-block",
                    width: "48%",
                  }}
                >
                  This is my custom Google button
                </GoogleButton>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
           
          </div>
        </Model>
      </div>
    );
  }
}

export default withRouter(Wallpaper);
