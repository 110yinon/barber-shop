import React from 'react';
import './styles.css';
import Header from './comps/Header'
import Main from './comps/Main'
import AlbumList from './comps/AlbumList';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AlbumList />
      <Footer />
    </div>
  );
}

export default App;
