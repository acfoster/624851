import { NavLink } from "react-router-dom";
import Meta from "./Meta";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="site-shell">
        <header className="site-header">
          <div className="container header-inner">
            <NavLink className="brand" to="/">
              <span className="brand-mark">624851</span>
              <span className="brand-copy">
                <strong>624851 NB Inc.</strong>
                <span>Software development · Moncton, NB</span>
              </span>
            </NavLink>
            <nav className="site-nav" aria-label="Primary">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " nav-link-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-title">624851 NB Inc.</p>
              <p className="footer-text">
                Small software shop based in Moncton, New Brunswick. Products
                and selected client work.
              </p>
              <p className="footer-text">
                © {new Date().getFullYear()} 624851 NB Inc.
              </p>
            </div>
            <div>
              <p className="footer-title">Contact</p>
              <p className="footer-text">
                <a href="mailto:info@624851.com">info@624851.com</a>
              </p>
              <p className="footer-text">Moncton, New Brunswick, Canada</p>
            </div>
            <div>
              <p className="footer-title">Navigation</p>
              <p className="footer-text">
                <NavLink to="/about">About</NavLink>
              </p>
              <p className="footer-text">
                <NavLink to="/projects">Projects</NavLink>
              </p>
              <p className="footer-text">
                <NavLink to="/contact">Contact</NavLink>
              </p>
              <p className="footer-text">
                <NavLink to="/privacy">Privacy</NavLink>
              </p>
              <p className="footer-text">
                <NavLink to="/terms">Terms</NavLink>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
