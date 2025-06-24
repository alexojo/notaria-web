import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledLabel = styled(Box)(({ theme, state }) => {
  const isLightMode = theme.palette.mode === 'light';

  const isFilled = state.variant === 'filled';
  const isSoft = state.variant === 'soft';
  const isInverted = state.variant === 'inverted';

  const baseStyle = {
    ...(state.color === 'default' && {

      ...(isFilled && {
        color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
        backgroundColor: theme.palette.text.primary,
      }),

      ...(isSoft && {
        color: theme.palette.text.secondary,
        backgroundColor: alpha(theme.palette.grey[500], 0.16),
      }),
    }),
  };

  const variantStyles = {
    ...(state.color !== 'default' && {

      ...(isFilled && {
        color: theme.palette[state.color].contrastText,
        backgroundColor: theme.palette[state.color].main,
      }),

      ...(isSoft && {
        color: theme.palette[state.color][isLightMode ? 'dark' : 'light'],
        backgroundColor: alpha(theme.palette[state.color].main, 0.16),
      }),

      ...(isInverted && {
        color: theme.palette[state.color].main,
        backgroundColor: theme.palette[state.color].lighter,
      }),
    }),
  };

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    lineHeight: 0,
    height: 24,
    minWidth: 24,
    cursor: 'default',
    padding: theme.spacing(0, 1),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.font_WeightBold,
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shorter,
    }),
    ...baseStyle,
    ...variantStyles,
  };
});
