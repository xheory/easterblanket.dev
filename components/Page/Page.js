import "./Page.scss";
import { classNames } from "../../common";
import Container from "../Container/Container";

const Page = ({ children, className, ...restProps }) => (
  <div className={classNames("page", className)} {...restProps}>
    <Container>{React.Children.toArray(children)}</Container>
  </div>
);

export default Page;
