import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../../common";

const NavLink = ({ href, children, className, ...restProps }) => {
  let classes = [];
  if (className !== undefined) classes.push(className);
  if (href === useRouter().pathname) classes.push("active");
  return (
    <Link href={href}>
      <a className={classNames(...classes)} {...restProps}>
        {React.Children.toArray(children)}
      </a>
    </Link>
  );
};

export default NavLink;
