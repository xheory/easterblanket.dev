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
      key={company}
    >
      <ul>
        {achievements.map((achievement, achievementId) => (
          <li key={achievementId}>{achievement}</li>
        ))}
      </ul>
    </Entry>
  ));

export default WorkExperience;
