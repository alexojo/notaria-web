import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

// import { authRoutes } from "./auth";
import MainLayout from "../../layouts/main";
// import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

const PrincipalHomePage = lazy(() => import('src/pages/home'));

export function Router() {

    return useRoutes([
        {
            path: '/',
            /* element: <Navigate to={CONFIG.auth.redirectPath} replace/> */
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <MainLayout>
                        <PrincipalHomePage />
                    </MainLayout>
                </Suspense>
            )
        },

        {
            path: '/servicios',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <MainLayout>
                        <h1>Servicios</h1>
                    </MainLayout>
                </Suspense>
            )
        },
        {
            path: '/nosotros',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <MainLayout>
                        <h1>Nosotros</h1>
                    </MainLayout>
                </Suspense>
            )
        },


        // Auth
        // ...authRoutes,

        // Dashboard
        // ...dashboardRoutes,

        // No match
/*         {
            path: '*',
            element: 
        } */
    ])
}