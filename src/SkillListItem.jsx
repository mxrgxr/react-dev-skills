import './SkillListItem.css';

export default function SkillListItem({ skill }) {
  return <li class="SkillListItem">{skill.name} Level: {skill.level}</li>;
}