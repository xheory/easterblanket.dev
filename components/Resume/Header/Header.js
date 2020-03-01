import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

const Header = () => (
  <header className="resume-header print-only">
    <div className="header-section">
      <h1>Richard Oosterlaken</h1>
      <h2>Software &amp; Web Developer</h2>
    </div>
    <ul className="header-section">
      <li>
        <FontAwesomeIcon icon="envelope" /> richard.oosterlaken@gmail.com
      </li>
      <li>
        <FontAwesomeIcon icon="phone-alt" /> +31 (0)6 254 761 22
      </li>
      <li>
        <FontAwesomeIcon icon="globe" /> https://oosterlaken.dev/
      </li>
    </ul>
  </header>
);

export default Header;
