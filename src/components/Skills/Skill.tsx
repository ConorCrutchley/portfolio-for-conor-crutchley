import type { ISpecificSkill } from '../../models/skills.model';

const Skill = ({ specificSkill }: { specificSkill: ISpecificSkill }) => {
  return (
    <div>
      <p>
        <strong>{specificSkill.skill}</strong>
      </p>
    </div>
  );
};

export default Skill;
