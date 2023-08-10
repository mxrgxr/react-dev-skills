import { useState } from 'react';
import './NewSkillForm.css';

export default function NewSkillForm({ addSkill }) {
  const [skillForm, setSkillForm] = useState({ name: '', level: '3' });

  function handleChange(event) {
    const { name, value } = event.target;
    setSkillForm((skillForm) => ({ ...skillForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addSkill(skillForm);
    setSkillForm({ name: '', level: '3' });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>
        Skill:
        <input
          type="text"
          name="name"
          value={skillForm.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Level:
        <select
          name="level"
          value={skillForm.level}
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <button type="submit" className="NewSkillForm">
        Add Skill
      </button>
    </form>
  );
}
