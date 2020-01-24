import "./Header.scss";
import Link from "next/link";

const ActiveLink = ({ href, children }) => (
  <Link href={href}>
    <a>{React.Children.toArray(children)}</a>
  </Link>
);

const Header = () => (
  <nav className="header">
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/contact">Contact</ActiveLink>
  </nav>
);

export default Header;
