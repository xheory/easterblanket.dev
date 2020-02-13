const Page = props => (
  <div className="page">{React.Children.toArray(props.children)}</div>
);

export default Page;
