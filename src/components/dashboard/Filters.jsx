function Filters({ value, onChange }) {
    return (
        <div className="filters-container">
            <label style={{ marginRight: "8px" }} >Time Range:</label>

            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="all">All</option>
                <option value="recent">Last 2 Months</option>
            </select>
        </div>
    );
}

export default Filters;