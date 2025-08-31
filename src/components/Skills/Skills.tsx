import Skill from '@/components/Skills/Skill';
import { skills } from '@/models/skills.model';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((skill) => {
        const orderedSpecificSkills = skill.specificSkills.sort(
          (a, b) => b.level - a.level,
        );
        return (
          <div key={`skill_${skill.title}`}>
            <h3>{skill.title}</h3>
            <div className="row">
              {orderedSpecificSkills.map((specificSkill) => (
                <Skill
                  key={`skill_${skill.key}_${specificSkill.key}`}
                  specificSkill={specificSkill}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
