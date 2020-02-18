import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <div className="header-section">
          <h1>Richard Oosterlaken</h1>
          <h2>Software &amp; Web Developer</h2>
        </div>
        <ul className="header-section print-only">
          <li>richard.oosterlaken@gmail.com</li>
          <li>+31 (0)6 254 761 22</li>
          <li>https://oosterlaken.dev/</li>
        </ul>
      </header>
      <hr />
      <section>
        <section className="work-experience">
          <h3>Work Experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="education">
          <h3>Education</h3>
          <p>Text...</p>
        </section>
        <section className="achievements">
          <h3>Achievements</h3>
          <p>Text...</p>
        </section>
      </section>
    </div>
  );
};

export default Resume;
