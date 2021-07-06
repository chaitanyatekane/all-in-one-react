import React from 'react';
import './App.css';
import Header from '../../Header/Header';
import SearchBox from './SearchBox/SearchBox';

class App extends React.Component {
    
    state = {
        headerText: "Hint Names",
    }

    render(){
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SearchBox />
            </div>
        )
    }
}

export default App