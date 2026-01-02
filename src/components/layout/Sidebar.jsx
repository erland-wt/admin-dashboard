import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <aside >
            <h3>Admin</h3>

            <nav>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;