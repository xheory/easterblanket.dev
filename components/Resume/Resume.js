import "./Resume.scss";
import Header from "./Header/Header";
import Entry from "./Entry/Entry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <div className="resume">
      <Header />
      <hr />
      <section>
        <section className="skills">
          <h3>
            <FontAwesomeIcon icon="book" /> Skills
          </h3>
          <b>To-do:</b> Add a list of tags laying out all the tech that I've
          ever used.
        </section>
        <section className="work-experience">
          <h3>
            <FontAwesomeIcon icon="suitcase" /> Work Experience
          </h3>
          <div className="entries">
            <Entry
              title="EasterBlanket Development"
              subtitle="Freelancer"
              timespan="Dec 2019 – Now"
            ></Entry>
            <Entry
              title="Jibia"
              subtitle="Full Stack Developer"
              timespan="Oct 2018 – Aug 2019"
            ></Entry>
            <Entry
              title="PeopleScience"
              subtitle="Developer &amp; Co-founder"
              timespan="Jul – Nov 2018"
            ></Entry>
          </div>
        </section>
        <section className="education">
          <h3>
            <FontAwesomeIcon icon="graduation-cap" /> Education
          </h3>
          <div className="entries">
            <Entry
              title="Artificial Intelligence"
              subtitle="Utrecht University"
              timespan="2012 – 2018"
            >
              During my studies, I mainly focused on courses related to computer
              science, as I knew beforehand that that was where my interests
              mostly lie. The overlapping area of CS and linguistics were
              eventually what I would write my thesis about.
              <br />
              <br />I was very active in our study association, U.S.C.K.I.
              Incognito, joining multiple commissions and helping to organise
              many events (mainly talks from alumni, PhD'ers and professors).
            </Entry>
          </div>
        </section>
        <section className="achievements">
          <h3>
            <FontAwesomeIcon icon="star" /> Achievements
          </h3>
          <div className="entries">
            <Entry title="Junction Hackathon" timespan="Nov 2019">
              Participated in Junction 2019 in Helsinki, scoring second place in
              the community popularity vote. We applied "AI-based Crowd Control"
              in our concept application "PocketPark" to improve the experiences
              of both visitors and management of Finland's national parks.
            </Entry>
            <Entry title="Xomnia Hackathons" timespan="2016 – 2018">
              Participated multiple times in the annual Xomnia hackathons. We
              won the first prize in 2017 (Police Security Monitor) and the
              second prize in 2016 (Sustainable Fishing).
            </Entry>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Resume;
