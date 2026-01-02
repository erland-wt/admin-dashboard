function RoleSwitcher({ value, onChange }) {
    return (
        <div className="role-container">
            <label style={{ marginRight: "8px" }}>Role:</label>

            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="viewer">Viewer</option>
                <option value="admin">Admin</option>
            </select>
        </div>
    );
}

export default RoleSwitcher;