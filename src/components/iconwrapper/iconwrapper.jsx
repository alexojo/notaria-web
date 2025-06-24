import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const IconWrapper = forwardRef(({ icon, width = 20, sx, ...props }, ref) => (

    <Box
        ssr
        component={Icon}
        className="icon-wrapper"
        icon={icon}
        ref={ref}
        sx={{
            width,
            height: width,
            flexShrink: 0,
            display: 'inline-flex',
            ...sx,
          }}
        {...props}
    />

));

IconWrapper.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sx: PropTypes.object,
    width: PropTypes.number,
};

export default IconWrapper;