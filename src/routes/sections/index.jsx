import { Navigate, useRoutes } from "react-router-dom";

import { authRoutes } from "./auth";
import { CONFIG } from "../../config-global";
import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------


export function Router() {

    return useRoutes([
        {
            path: '/',
            element: <Navigate to={CONFIG.auth.redirectPath} replace/>
        },

        // Auth
        ...authRoutes,

        // Dashboard
        ...dashboardRoutes,

        // No match
        { 
            path: '*', 
            element: <Navigate to="/auth/sign-in" replace/>  
        }
    ])
}