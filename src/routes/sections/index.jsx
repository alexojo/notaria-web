import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "../../layouts/main";
import { serviciosRoutes } from "./servicios";
import { SplashScreen } from "../../components/loading-screen";

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
                <Suspense fallback={ <SplashScreen /> }>
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
                <Suspense fallback={ <SplashScreen /> }>
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