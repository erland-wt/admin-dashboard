export function fetchDashboardData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                stats: {
                    users: 1200,
                    revenue: 45000,
                    orders: 320,
                },
                chartData: [
                    { name: "Jan", users: 400, revenue: 3000 },
                    { name: "Feb", users: 600, revenue: 5000 },
                    { name: "Mar", users: 800, revenue: 7000 },
                    { name: "Apr", users: 1000, revenue: 9000 },
                ],
            }, 1000);
        });
    });
}