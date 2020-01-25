import "./Page.scss";

const Page = props => {
  return (
    <div className="page">{React.Children.toArray(props.children || [])}</div>
  );
};

export default Page;
