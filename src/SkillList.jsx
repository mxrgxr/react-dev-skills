import SkillListItem from './SkillListItem';

export default function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <SkillListItem key={index} skill={skill} />
      ))}
    </ul>
  );
}