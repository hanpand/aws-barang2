// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <div>Contact me via E-mail : bonifasiusyohan@gmail.com</div>
      </Router>
    </ShopContextProvider>
  </div>;
}

export default App;