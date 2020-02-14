import "./Container.scss";

const Container = ({ children, ...restProps }) => (
  <div className="container" {...restProps}>
    {React.Children.toArray(children)}
  </div>
);

export default Container;
