import { Link } from 'react-router-dom';
import '../styles/Products.css'; 

const Products = () => {
  const productList = [
    { id: 1, nombre: 'Mouse Gamer' },
    { id: 2, nombre: 'Teclado Mecánico' },
    { id: 3, nombre: 'Monitores 240hz' }
  ];

  return (
    <div className="container">
      <h1>Nuestros Productos</h1>
      <ul className="products-list">
        {productList.map((product) => (
          <li key={product.id}>
            <Link to={`/productos/${product.id}`}>{product.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
