import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      <header>
        <h1>¡Bienvenidos a DassoStore!</h1>
        <p>Los mejores periféricos gamer para ti</p>
        <div className="cta-buttons">
          <a href="#comprar">Comprar Ahora</a>
          <a href="#ofertas">Ver Ofertas</a>
        </div>
      </header>

      <Outlet />

      <footer>
        <p>© 2024 DassoStore - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Layout;
