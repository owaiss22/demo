import React from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Landing from './Components/Landing';
import Register from './Components/Registration';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navbar/>
        <Slider/>
        <Landing/>
        <Footer/>
        {/* <Register/> */}
      </React.Fragment>
    )
  }
}

export default App;
