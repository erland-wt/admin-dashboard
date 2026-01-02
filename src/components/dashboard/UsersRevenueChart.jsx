import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function UsersRevenueChart({ data, showRevenue }) {
    if (!data || data.length === 0) {
        return <p>No chart data available.</p>;
    }

    return (
        <div className="chart-container">
        <ResponsiveContainer>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
                type="monotone"
                dataKey="users"
                stroke="#28273fff"
                name="Users"
            />

            {showRevenue && (
                <Line
                type="monotone"
                dataKey="revenue"
                stroke="#629a77ff"
                name="Revenue"
                />
            )}
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}

export default UsersRevenueChart;
