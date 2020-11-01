import './App.scss';
import Product from './Product'
import {products} from './data/products.js'

function App() {
  return (
    <div className="App">
      <div id="background" />

      <div id="page_container">

        <header className="App-header">
          <div id="title">Fade</div>
          <img src="https://fadeskincare.co/images/fade_logo_web.svg" className="App-logo" alt="logo" />
        </header>

        <main id="content">
          {products.map((prod,key) => (
            <Product key={key} prod={prod} />
          ))}
        </main>

        <footer>
          <p>Our ordering system is currently being upgraded. Please email <a href="mailto:jeremy@fadeskincare.co">jeremy@fadeskincare.co</a> to place an order.
           </p>
         </footer>

      </div>
    </div>
  );
}

export default App;
