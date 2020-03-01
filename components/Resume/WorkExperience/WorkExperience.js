import Entry from "../Entry/Entry";
import workExperience from "../../../data/workExperience";
import "./WorkExperience.scss";

const WorkExperience = () =>
  workExperience.map(({ company, job, time, achievements }) => (
    <Entry
      className="work-experience"
      title={company}
      subtitle={job}
      timespan={time}
    >
      <ul>
        {achievements.map(achievement => (
          <li>{achievement}</li>
        ))}
      </ul>
    </Entry>
  ));

export default WorkExperience;
