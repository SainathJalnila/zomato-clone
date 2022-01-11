import React from "react";
import { withRouter } from "react-router-dom";

class QuickSearchItem extends React.Component {
  handleNavigate = (mealTypeId) => {
    const locationId = sessionStorage.getItem("locationId");
    if (locationId) {
      this.props.history.push(
        `/filter?mealtypes=${mealTypeId}&location=${locationId}`
      );
    } else {
      this.props.history.push(`/filter?mealtypes=${mealTypeId}`);
    }
  };

  render() {
    const { quickSearchItem } = this.props;
    return (
      <div
        className="col-sm-12 col-md-12 col-lg-4"
        onClick={() => this.handleNavigate(quickSearchItem.meal_type)}
      >
        <div className="rectangle-sec">
          <div className="img-sec">
            <img src={`./${quickSearchItem.image}`} alt="" srcset="" />
          </div>
          <div className="text-sec">
            <h3 className="text-1">{quickSearchItem.name}</h3>
            <p className="text-2">{quickSearchItem.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuickSearchItem);
