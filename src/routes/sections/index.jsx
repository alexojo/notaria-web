import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "../../layouts/main";
import { serviciosRoutes } from "./servicios";

// ----------------------------------------------------------------------

const PrincipalHomePage = lazy(() => import('src/pages/home'));
const AboutUsPage = lazy(() => import('src/pages/about-us'));

// ----------------------------------------------------------------------

export function Router() {

    return useRoutes([
        {
            path: '/',
            /* element: <Navigate to={CONFIG.auth.redirectPath} replace/> */
            element: (
                <Suspense fallback={<div>Cargando...</div>}>
                    <MainLayout>
                        <PrincipalHomePage />
                    </MainLayout>
                </Suspense>
            )
        },

        ...serviciosRoutes,
        
        {
            path: '/nosotros',
            element: (
                <Suspense fallback={<div>Cargando...</div>}>
                    <MainLayout>
                        <AboutUsPage />
                    </MainLayout>
                </Suspense>
            )
        },

        // No match
/*         {
            path: '*',
            element: 
        } */
    ])
}