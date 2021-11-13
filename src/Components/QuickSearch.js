import React from 'react';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {
    render() {
        return (
            <div>
           <div className="main-heading  container">
            <div class="Heading">
                <p>Quick Searches</p>
            </div>
            <div className="subheading">
                Discover restaurants by type of meal
            </div>
        </div>
      <QuickSearchItem/>
     </div>
        
        )
    }
}

export default QuickSearch;