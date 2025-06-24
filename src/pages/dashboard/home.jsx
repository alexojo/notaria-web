import { Helmet } from 'react-helmet-async';

import { HomeView } from '../../sections/home/view';

// ----------------------------------------------------------------------

export default function PrincipalHomePage() {
    return (
        <>
            <Helmet>
                <title> Dashboard: Home</title>
            </Helmet>

            <HomeView />
        </>
    );
}
