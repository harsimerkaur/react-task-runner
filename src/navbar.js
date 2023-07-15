// import React from 'react';
// import ReactDOM from 'react-dom';
import React from 'react';
import logo from './images/logo192.png';

 const  Navbar = () => {
  return (
    // <div>
    //   <h1>
    //     My Awesome website in React
    //   </h1>
    //   <h2>
    //     Why to use React
    //   </h2>
    //   <ul>
    //     <li>React is composable</li>
    //     <li>React is declarative</li>
    //     <li>React is hirable</li>
    //     <li>It is actively maiantained by many skilled people</li>
    //   </ul>
    // </div>
    <div className="header">
      <div className="logo-container">
        <img alt="react logo" src={logo} />
        <span>React Facts</span>
      </div>
      <ul>
        <li>Pricing</li>
        <li>Home</li>
        <li>Subscribe</li>
        <li>About</li>
      </ul>
    </div>
  
  )

}
export default Navbar;
// ReactDOM.render(<div><Navbar /> <MyMainContent /> </div>, document.getElementById("rooot"))

// ReactDOM.render(newElement, document.getElementById("rooot"))

// document.getElementById("rooot").append(JSON.stringify(Navbar))

