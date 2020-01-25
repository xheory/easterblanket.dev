import "./Header.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, children, ...restProps }) => {
  let classes = restProps.className || "";
  if (href === useRouter().pathname) {
    classes += " active";
  }
  console.log("Classes:", classes);
  return (
    <Link href={href}>
      <a className={classes}>{React.Children.toArray(children)}</a>
    </Link>
  );
};

const Header = () => (
  <nav className="header">
    <ActiveLink href="/" className="kaas">
      Home
    </ActiveLink>
    <ActiveLink href="/contact">Contact</ActiveLink>
  </nav>
);

export default Header;
