import React from 'react';

const StatCard = React.memo(function StatCard({ label, value }) {
    return (
        <div className='card-container'>
            <div className="content-card-container">
                <h4>{label}</h4>
                <p>{value}</p>
            </div>
        </div>
    );
});

export default StatCard;
