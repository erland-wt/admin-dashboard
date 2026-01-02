import DashboardLayout from "../components/layout/DashboardLayout";
import useDashboardData from "../hooks/useDashboardData";
import StatCard from "../components/dashboard/StatCard";
import UsersRevenueChart from "../components/dashboard/UsersRevenueChart";
import { useState, useMemo, useEffect, useCallback } from "react";
import Filters from "../components/dashboard/Filters";
import RoleSwitcher from "../components/dashboard/RoleSwitcher";

function Dashboard() {
    const { data, loading, error } = useDashboardData();

    const [range, setRange] = useState("all");
    const [role, setRole] = useState(() => {
        return localStorage.getItem("role") || "admin";
    });

    const permissions = useMemo(() => {
        return {
            canSeeRevenue: role === "admin",
            canFilterByRange: role === "admin",
        };
    }, [role]);

    useEffect(() => {
        localStorage.setItem("role", role);
    }, [role]);

    const visibleChartData = useMemo(() => {
        if (!data || !Array.isArray(data.chartData)) return [];

        if (role === "admin") return data.chartData;

        return data.chartData.filter(item => !item.sensitive);
    }, [data, role]);

    // Chart data filtered based on role and selected time range
    const filteredChartData = useMemo(() => {
        if (range === "recent") {
            return visibleChartData.slice(-2);
        }

        return visibleChartData;
    }, [visibleChartData, range]);

    const handleRoleChange = useCallback((newRole) => {
        setRole(newRole);
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <p>Loading Dashboard...</p>
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <p style={{ color: "red" }}>{error}</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <h1>Dashboard Overview</h1>

            {data && (
                <div className="content-container">
                    <div>
                        <StatCard label="Users" value={data.stats?.users ?? 0} />
                        {role === "admin" && (
                            <StatCard
                                label="Revenue"
                                value={`$${data.stats?.revenue ?? 0}`}
                            />
                        )}
                        <StatCard label="Orders" value={data.stats?.orders ?? 0} />
                    </div>

                    <RoleSwitcher value={role} onChange={handleRoleChange} />

                    {permissions.canFilterByRange && (
                        <Filters value={range} onChange={setRange} />
                    )}

                    <UsersRevenueChart data={filteredChartData} showRevenue={permissions.canSeeRevenue}/>
                </div>
            )}
        </DashboardLayout>
    );
}

export default Dashboard;
