import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Layout;
