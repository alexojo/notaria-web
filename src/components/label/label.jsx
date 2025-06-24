import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { StyledLabel } from './styled-item';

// ----------------------------------------------------------------------

const Label = forwardRef(
  (
    {
      children,
      color = 'default',
      variant = 'soft',
      startIcon,
      endIcon,
      sx,
      ...props
    },
    ref
  ) => {

    const theme = useTheme();

    const iconStyling = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        state={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 1 }),
          ...(endIcon && { pr: 1 }),
          ...sx,
        }}
        theme={theme}
        {...props}
      >
        {startIcon && <Box sx={{ mr: 1, ...iconStyling }}>{startIcon}</Box>}
        {children}
        {endIcon && <Box sx={{ ml: 1, ...iconStyling }}>{endIcon}</Box>}
      </StyledLabel>
    );
  }
);

Label.propTypes = {
  children: PropTypes.node,
  endIcon: PropTypes.node,
  startIcon: PropTypes.node,
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['filled', 'soft','inverted']),
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
};

export default Label;
