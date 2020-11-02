import './App.scss';
import Product from './Product'
import About from './About'
import {products} from './data/products.js'
import logo from './images/fade_logo_web.svg'

import {
  NavLink,
  Switch,
  Route
} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <div id="background" />

      <div id="page_container">

        <header className="App-header">
          <div id="title">Fade</div>
          <div id="site_info">
            <p>° fade up °<br />° for all °</p>
            <p>simple, clean products formulated for acne-prone skin.</p>
          </div>
          <img src={logo} className="App-logo" alt="logo" />

          <nav>
            <ul className="navlinks">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>

        </header>

        <main id="content">

        <Switch>
          //ABOUT PAGE
          <Route path="/about"><About /></Route>
          // HOME PAGE
          <Route path="/">
            {products.map((prod,key) => (
              <Product key={key} prod={prod} />
            ))}
          </Route>
        </Switch>

        </main>

        <footer>
          <p>Our ordering system is currently being upgraded. Please email <a href="mailto:jeremy@fadeskincare.co">jeremy@fadeskincare.co</a> to place an order.
           </p>
           <p>made in san francisco 🌉</p>
           <p>
           <a href="https://instagram.com/fadeskincare">instagram</a>
           </p>
         </footer>

      </div>
    </div>
  );
}

export default App;
