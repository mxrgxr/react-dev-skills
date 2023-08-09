import './NewSkillForm.css';

export default function NewSkillForm() {
    return (
      <form className="NewSkillForm">
        <label>
          Skill:
          <input type="text"/>
        </label>
        <label>
          Level:
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Add Skill</button>
      </form>
    );
}