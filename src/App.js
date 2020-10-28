import './App.scss';
import Product from './Product'
import {products} from './data/products.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src="https://fadeskincare.co/images/fade_logo_web.svg" className="App-logo" alt="logo" />
      </header>

      <main id="content">
        {products.map((prod,key) => (
          <Product key={key} prod={prod} />
        ))}
      </main>
    </div>
  );
}

export default App;
