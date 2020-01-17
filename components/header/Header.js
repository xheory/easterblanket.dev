import Link from "next/link";
import "./Header.scss";

const Header = () => (
    <nav className="header">
        <Link href="/">
            <a title="Home">Home</a>
        </Link>
        <Link href="/contact">
            <a title="Contact">Contact</a>
        </Link>
    </nav>
);

export default Header;
