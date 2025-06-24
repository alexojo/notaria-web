import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { HeaderSimple } from '../common';

// ----------------------------------------------------------------------

export default function AuthLayout({ children }) {

    return (
        <>
            <HeaderSimple />

            <Box
                component="main"
                sx={{
                    py: 12,
                    display: 'flex',
                    minHeight: '100vh',
                    textAlign: 'center',
                    px: { xs: 2, md: 0 },
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',

                    '&:before': {
                        width: 1,
                        height: 1,
                        zIndex: -1,
                        content: "''",
                        opacity: 0.32,
                        position: 'absolute',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundImage: 'url(/assets/background/overlay_auth.jpg)',
                        filter: 'blur(20px)',
                    },
                }}
            >
                <Box
                    sx={{
                        py: 6,
                        px: 4,
                        borderRadius: 2,
                        bgcolor: 'background.default',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '440px',
                        width: 1,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </>

    )

}

AuthLayout.propTypes = {
    children: PropTypes.node,
};