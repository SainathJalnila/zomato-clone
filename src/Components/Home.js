import React from 'react';
import QuickSearch from './QuickSearch';
import Wallpaper from './Wallpaper';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Wallpaper />
                <QuickSearch />
            </div>
        )
    }
}

export default Home;

