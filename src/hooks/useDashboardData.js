import { useEffect, useState } from 'react';
import { fetchDashboardData } from '../services/dashboardApi';

function useDashboardData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadDashboard() {
            try {
                const response = await fetchDashboardData();
                setData(response);
            } catch (err) {
                setError("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    return { data, loading, error };
}

export default useDashboardData;