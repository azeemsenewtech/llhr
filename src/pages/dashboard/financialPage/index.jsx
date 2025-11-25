import React from 'react';
import DashboardStats from '../my-properties/feacture/dashboardStatus';
import DashboardCharts from './feacture/chart';
import PropertyPerformance from './feacture/propertyPerfomes';

const FinancialPage = () => {
    return (
        <div>
            <DashboardStats/>
            <DashboardCharts/>
            <PropertyPerformance/>
        </div>
    );
}

export default FinancialPage;
