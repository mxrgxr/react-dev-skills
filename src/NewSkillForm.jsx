function NewSkillForm() {
    return(
        <form>
            <label>
                Skill:
                <input
                    type="text"
                    value={skill}
                />
            </label>
            <label>
                Level:
                <select
                    value={level}
                >
                    <option value={1}>1</option>
                    <option value={2}>1</option>
                    <option value={3}>1</option>
                    <option value={4}>1</option>
                    <option value={5}>1</option>
                </select>
            </label>
            <button type="submit">Add Skill</button>
        </form>
    )
}

export default NewSkillForm;