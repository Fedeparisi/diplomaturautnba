import react from 'react'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
          <Header/>
          <Nav/>
          <Footer/>
    </div>
  );
}

export default App;
