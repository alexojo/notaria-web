const ROOTS = {
    AUTH: '/auth',
    DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
    
    page404: '/404',

    auth: {
        signIn: `${ROOTS.AUTH}/sign-in`,
        signUp: `${ROOTS.AUTH}/sign-up`,
    },

    dashboard: {
        root: ROOTS.DASHBOARD,
        home: `${ROOTS.DASHBOARD}/home`,
        customers: {
            root: `${ROOTS.DASHBOARD}/customers`,
            list: `${ROOTS.DASHBOARD}/customers/list`,
            details: `${ROOTS.DASHBOARD}/customers/details`,
        },
        policies: `${ROOTS.DASHBOARD}/policies`,
        commission: `${ROOTS.DASHBOARD}/commission`,
    }

}