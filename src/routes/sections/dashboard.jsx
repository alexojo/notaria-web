import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from '../../layouts/dashboard';
import { LoadingScreen } from '../../components/loading';

// ----------------------------------------

// Dashboard

const PrincipalHomePage = lazy(() => import('src/pages/dashboard/home'));
// const PoliciesPage = lazy(() => import('src/pages/dashboard/policies'));



export const dashboardRoutes = [
    
    {
        path: 'dashboard',
        element: (
            <DashboardLayout>
                <Suspense fallback={<LoadingScreen/>}>
                    <Outlet />
                </Suspense>
            </DashboardLayout>
        ),

        children: [
            { element: (<PrincipalHomePage/>), index: true },
            { path: 'policies', element: (<PrincipalHomePage/>) },
            { path: 'customers', element: (<PrincipalHomePage/>), 
                children: [
                    { element: (<PrincipalHomePage/>), index: true },
                    { path: 'list', element: (<PrincipalHomePage/>) },
                    { path: 'details', element: (<PrincipalHomePage/>) },
                ],
            },
            { path: 'commission', element: (<PrincipalHomePage/>) },
        ],
       
    },

];