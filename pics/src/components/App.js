import React from 'react';
import unspash from '../api/unsplash.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async  (term) => {
        const response = await unspash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                <ImageList images={ this.state.images }/>
            </div>
        );
    }
}

export default App;