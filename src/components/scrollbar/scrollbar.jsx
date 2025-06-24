import PropTypes from 'prop-types';
import { memo, forwardRef } from 'react';

import Box from '@mui/material/Box';

import { StyledScrollbar, StyledRootScrollbar } from './styles';

// ----------------------------------------------------------------------

const CustomScrollbar = forwardRef(({ children, sx, ...props }, ref) => {
    
    // Verify if the user is using a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
    );

    // Render the default scrollbar for mobile devices
    if (isMobile) {
        return (
            <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...props}>
                {children}
            </Box>
        );
    }

    // Render the custom scrollbar for desktop devices
    return (
        <StyledRootScrollbar>
            <StyledScrollbar
                scrollableNodeProps={{ ref }}
                clickOnTrack={false}
                sx={sx}
                {...props}
            >
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
});

CustomScrollbar.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};

export default memo(CustomScrollbar);
