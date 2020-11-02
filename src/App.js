import './App.scss';
import Product from './Product'
import {products} from './data/products.js'
import logo from './images/fade_logo_web.svg'

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

        </header>

        <main id="content">
          {products.map((prod,key) => (
            <Product key={key} prod={prod} />
          ))}
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
