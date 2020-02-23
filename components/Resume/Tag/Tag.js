import "./Tag.scss";
import { classNames } from "../../../common";

const Tag = ({ children, className, ...restProps }) => (
  <span className={classNames("resume-tag", className)} {...restProps}>
    {React.Children.toArray(children)}
  </span>
);

export default Tag;
