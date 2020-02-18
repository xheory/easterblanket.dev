import NavLink from "../NavLink/NavLink";
import "./NavBar.scss";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => (
  <nav className="nav-bar no-print">
    <Container>
      <section>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/resume">Résumé</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </section>
      <section>
        <a
          href="https://github.com/xheory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
        </a>
      </section>
    </Container>
  </nav>
);

export default NavBar;
