import "./Entry.scss";

const Entry = ({ title, subtitle, timespan, children }) => {
  return (
    <div className="resume-entry">
      <div className="entry-row">
        <h4 className="title">{title}</h4>
        {timespan && <span className="timespan">{timespan}</span>}
      </div>
      {subtitle && (
        <div className="entry-row">
          <h5 className="subtitle">{subtitle}</h5>
        </div>
      )}
      {children && (
        <div className="entry-row body">{React.Children.toArray(children)}</div>
      )}
    </div>
  );
};

export default Entry;
