import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AuthLayout from '../../layouts/auth';
import { LoadingScreen } from '../../components/loading';

// -------------------------------------------

// Auth

const SignInPage = lazy(() => import('src/pages/auth/sign-in'));
// const SignUpPage = lazy(() => import('src/pages/auth/sign-up'));


export const authRoutes = [
    
    {
        path: 'auth',
        element: (
            <AuthLayout>
                <Suspense fallback={<LoadingScreen/>}>
                    <Outlet />
                </Suspense>
            </AuthLayout>
        ),
        children: [
            {   
                path: 'sign-in',
                element: (<SignInPage/>),
            },
            {
                path: 'sign-up',
                element: (<SignInPage/>),
            },
        ]
    }

]