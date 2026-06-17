import "../css/navbar.css";
import { useTheme } from "../../context/ThemeContext";

interface NavbarProps {
  isBackdrop: boolean;
}

const Navbar = ({ isBackdrop }: NavbarProps) => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isBackdrop ? "backdrop" : ""}`}>
      <h1 className="home">
        <a href="#hero">Dario Colaciuri</a>
      </h1>
      <ul className="nav-links">
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#stack">stack</a>
        </li>
        <li>
          <a href="#music">music</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
      </ul>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        title={isLight ? "Dark mode" : "Light mode"}
      >
        {isLight ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
