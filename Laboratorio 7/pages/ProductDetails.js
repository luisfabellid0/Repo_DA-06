import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  const productDetails = {
    1: { nombre: 'Mouse gamer', precio: 'S/. 120.00', descripcion: 'Mouse con tecnología LIGHTSYNC.' },
    2: { nombre: 'Teclado mecánico', precio: 'S/. 100.00', descripcion: 'El Kumara es un teclado mecánico TKL.' },
    3: { nombre: 'Monitor', precio: 'S/. 600.00', descripcion: 'Monitor de alta definición con 240hz.' },
  };

  const product = productDetails[productId];

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="container">
      <h1>{product.nombre}</h1>
      <p>Precio: {product.precio}</p>
      <p>{product.descripcion}</p>
    </div>
  );
};

export default ProductDetails;
