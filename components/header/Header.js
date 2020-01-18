import Link from "next/link";
import { useRouter } from "next/router";
import "./Header.scss";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

const Header = () => (
  <nav className="header">
    <ActiveLink href="/">
      <a title="Home">Home</a>
    </ActiveLink>
    <ActiveLink href="/contact">
      <a title="Contact">Contact</a>
    </ActiveLink>
  </nav>
);

export default Header;
