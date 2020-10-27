import './App.scss';
import {products} from './data/products.js';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src="https://fadeskincare.co/images/fade_logo_web.svg" className="App-logo" alt="logo" />
      </header>

      <main id="content">
        {products.map(prod => (
          <div className="product">
            <h1>{prod.name}</h1>
            <p className="price">${prod.price}</p>
            <p className="description">{prod.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
