import "./Resume.scss";
import Header from "./Header/Header";

const Resume = () => {
  return (
    <div className="resume">
      <Header />
      <hr />
      <section>
        <section className="work-experience">
          <h3>Work Experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
