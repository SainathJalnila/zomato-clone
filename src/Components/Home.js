import React from "react";
import QuickSearch from "./QuickSearch";
import Wallpaper from "./Wallpaper";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      mealData: [],
    };
  }

  componentDidMount() {
    sessionStorage.clear();
    axios({
      url: " https://sheltered-bastion-74022.herokuapp.com/api/location",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        this.setState({ locations: res.data.location });
      })
      .catch((err) => console.log(err));

    axios({
      url: "https://sheltered-bastion-74022.herokuapp.com/api/mealtype",
      method: "GET",
      header: { "Content-Type": "application/json" },
    })
      .then((res) => {
        this.setState({ mealData: res.data.MealType });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { locations, mealData } = this.state;

    return (
      <div>
        <Wallpaper locationsData={locations} />
        <QuickSearch mealtypeData={mealData} />
      </div>
    );
  }
}

export default Home;
