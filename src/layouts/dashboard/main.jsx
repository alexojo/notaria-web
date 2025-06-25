import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { NAV, HEADER } from '../config-layout';
import { useResponsive } from '../../hooks/use-responsive';

// ----------------------------------------------------------------------

export default function Main({ children, sx, ...other }) {


    const isLargeScreen = useResponsive('up', 'lg');
    const paddingSpacing = 20;

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
                py: `${HEADER.HEIGHT_MOBILE + paddingSpacing}px`,
                ...(isLargeScreen && {
                    px: 2,
                    py: `${HEADER.HEIGHT_DESKTOP + paddingSpacing}px`,
                    width: `calc(100% - ${NAV.WIDTH_VERTICAL}px)`,
                    
                }),
                ...sx,
            }}
            {...other}
        >
            {children}
        </Box>
    );
}

Main.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};
