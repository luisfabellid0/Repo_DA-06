import { Link, Outlet } from 'react-router-dom';

const Products = () => (
  <>
    <h1>Products</h1>
    <ul>
      <li><Link to="featured">Featured</Link></li>
      <li><Link to="new">New</Link></li>
    </ul>
    <Outlet />
  </>
);

export default Products;
