import { Helmet } from 'react-helmet-async';

import { SignInView } from '../../sections/auth';

// ----------------------------------------------------------------------

export default function SignInPage() {
    return (
        <>
            <Helmet>
                <title> Momentum AG: Sign In</title>
            </Helmet>

            <SignInView />
        </>
    );
}
