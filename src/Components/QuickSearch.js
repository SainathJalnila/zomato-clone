import React from 'react';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {
    render() {
        let {mealtypeData } = this.props;
        return (
         <div>
           <div className="main-heading container">
             <div className="Heading">
                  <p>Quick Searches</p>
             </div>
             <div className="subheading">
                   Discover restaurants by type of meal
             </div>
         </div>
         <div className="container">
            <div className="row">
                {mealtypeData.map(item=>
                    {
                       return <QuickSearchItem quickSearchItem = {item} />
                    })}
         
                   </div>
                        
                        </div>
                    </div>
                    
    
        )
    }
}

export default QuickSearch;