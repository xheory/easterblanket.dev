import skills from "../../../data/skills.json";
import Tag from "../Tag/Tag.js";
import "./Skills.scss";

const Skills = () =>
  skills.map((skill, skillId) => (
    <div className="skill" key={skillId}>
      <span className="skill-name">{skill.name}: </span>
      {skill.entries.map((entry, entryId) => (
        <Tag key={entryId}>{entry}</Tag>
      ))}
    </div>
  ));

export default Skills;
