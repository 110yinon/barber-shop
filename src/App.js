import React from 'react';
import './styles.css';
import Header from './comps/Header'
import Main from './comps/Main'
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App no-gap grid">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
