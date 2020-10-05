import "./Resume.scss";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";
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
          <Skills />
        </section>
        <section className="work-experience">
          <h3>
            <FontAwesomeIcon icon="suitcase" /> Work Experience
          </h3>
          <WorkExperience />
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
              science. For my thesis, I wrote a custom classification algorithm
              based on the Levenshtein Distance.
              <br />
              <br />I was active in our study association, U.S.C.K.I. Incognito.
              As a member of several commissions I mainly organized talks from
              alumni, professors, etc.
            </Entry>
          </div>
        </section>
        <section className="achievements">
          <h3>
            <FontAwesomeIcon icon="star" /> Achievements
          </h3>
          <div className="entries">
            <Entry title="Junction Hackathon" timespan="Nov 2019">
              Participated in Junction 2019 in Helsinki, getting second place in
              the community popularity vote.
              <br />
              <br />
              We created an AI-based Crowd Control in our concept application
              "PocketPark". This would improve the experiences of both visitors
              and management of Finland's national parks.
            </Entry>
            <Entry title="Xomnia Hackathons" timespan="2016 – 2018">
              Participated multiple in Xomnia hackathons. We won the first prize
              in 2017 (Police Security Monitor) and the second prize in 2016
              (Sustainable Fishing).
            </Entry>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Resume;
