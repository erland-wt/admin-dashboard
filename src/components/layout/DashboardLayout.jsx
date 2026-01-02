import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />

            <div style={{ flex: 1 }}>
                <Header/>
                <main style={{ padding: "16px" }}>{children}</main>
            </div>
        </div>
    );
}

export default DashboardLayout;