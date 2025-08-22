import Skill from './Skill';
import { skills } from '../../models/skills.model';

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      {skills.map((skill) => (
        <div key={`skill_${skill.title}`}>
          {skill.specificSkills.map((specificSkill) => (
            <Skill
              key={`skill_${skill.key}_${specificSkill.key}`}
              specificSkill={specificSkill}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
