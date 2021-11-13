import React from 'react';
import { withRouter } from 'react-router-dom';

class QuickSearchItem extends React.Component {
    handleNavigate = () => {
        this.props.history.push('/filter');
    }

    render() {
        return (
            <div>
                <div class="container">
                <div class="row">   
                <div class="col-lg-4 col-md-6 col-sm-12" >
                    <div class="rectangle-sec" >
                        <div class="img-sec">
                            <img src="../Assets/breakfast.jpg" alt="" srcset=""/>
                        </div>
                        <div class="text-sec">
                            <h3  class="text-1">Breakfast</h3>
                            <p class="text-2">Start  your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="rectangle-sec ">
                        <div class="img-sec">
                            <img src="../Assets/lunch.jpg" alt="" srcset=""/>
                        </div>
                        <div class="text-sec">
                            <h3  class="text-1">Lunch</h3>
                            <p class="text-2">Start  your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="rectangle-sec "> 
                        <div class="img-sec">
                        <img src="../Assets/snacks.png" alt="" srcset=""/>
                    </div>
                    <div class="text-sec">
                        <h3  class="text-1">snacks</h3>
                        <p class="text-2">Start  your day with exclusive breakfast options</p>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="rectangle-sec  "> 
                        <div class="img-sec">
                        <img src="../Assets/dinner.png" alt="" srcset=""/>
                        </div>
                        <div class="text-sec">
                            <h3  class="text-1">dinner</h3>
                            <p class="text-2">Start  your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="rectangle-sec">
                        <div class="img-sec">
                            <img src="../Assets/drinks.png" alt="" srcset=""/>
                        </div>
                        <div class="text-sec">
                            <h3  class="text-1">Drink</h3>
                            <p class="text-2">Start  your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="rectangle-sec ">
                        <div class="img-sec">     
                            <img src="../Assets/nightlife.png" alt="" srcset=""/>
                        </div>
                        <div class="text-sec">
                            <h3  class="text-1">Breakfast</h3>
                            <p class="text-2">Start  your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>  
        </div>
</div>
            </div>
        )
    }
}

export default withRouter(QuickSearchItem);