
import './App.css';
import './components/ProductList.css'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/250',
      title: 'GMRLS',
      description: 'Goooood morning VIETNAAAM.',
      price: '$9.99'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/250',
      title: 'M1 Abrams',
      description: 'I ain`t a senator son, no',
      price: '$19.99'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/250',
      title: 'HIMARS',
      description: 'I love the smell of napalm in the morning.',
      price: '$29.99'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/250',
      title: 'M113',
      description: 'Who called democracy??',
      price: '$39.99'
    },
  ];

  return (
    <div className="App">
    <Header />
    <main  className="main-content">
      <ProductList products={products} />
      <ProductList products={products} />
    </main>
    <Footer/>
  </div>
  );
}

export default App;
