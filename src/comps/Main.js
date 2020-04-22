import React from 'react'
import AlbumList from './AlbumList'
import About from './About';

const Main = () => {
    return (
        <div className="main tablet-gap grid">
            <About />
            <AlbumList />
        </div>
    );
}
export default Main;