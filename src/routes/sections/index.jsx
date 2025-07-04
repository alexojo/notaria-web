import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

// import { authRoutes } from "./auth";
import MainLayout from "../../layouts/main";
// import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

const PrincipalHomePage = lazy(() => import('src/pages/home'));
const AboutUsPage = lazy(() => import('src/pages/about-us'));
const ServicesPage = lazy(() => import('src/pages/services'));

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
                        <ServicesPage />
                    </MainLayout>
                </Suspense>
            )
        },
        {
            path: '/nosotros',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <MainLayout>
                        <AboutUsPage />
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