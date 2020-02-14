import NavLink from "../NavLink/NavLink";
import "./NavBar.scss";
import Container from "../Container/Container";

const NavBar = () => (
  <nav className="nav-bar">
    <Container>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/resume">Résumé</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Container>
  </nav>
);

export default NavBar;
