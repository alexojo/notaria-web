import { alpha } from '@mui/material/styles';
import { fabClasses } from '@mui/material/Fab';

// ----------------------------------------------------------------------

const FAB_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export function fab(theme) {

    const isLightMode = theme.palette.mode === 'light';

    const generateFabStyles = (state) => {
        
        const isDefaultColor = state.color === 'default';
        const isInheritColor = state.color === 'inherit';
        const isCircular = state.variant === 'circular';
        const isExtended = state.variant === 'extended';
        const isOutlined = state.variant === 'outlined';
        const isOutlinedExtended = state.variant === 'outlinedExtended';
        const isSoft = state.variant === 'soft';
        const isSoftExtended = state.variant === 'softExtended';

        const baseStyles = {
            '&:hover, &:active': {
                boxShadow: 'none',
            },
            // FILLED
            ...((isCircular || isExtended) && {
                ...((isDefaultColor || isInheritColor) && {
                    boxShadow: theme.customShadows.z8,
                }),
                ...(isInheritColor && {
                    backgroundColor: theme.palette.text.primary,
                    color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
                    '&:hover': {
                        backgroundColor: isLightMode ? theme.palette.grey[700] : theme.palette.grey[400],
                    },
                }),
            }),
            // OUTLINED
            ...((isOutlined || isOutlinedExtended) && {
                boxShadow: 'none',
                backgroundColor: 'transparent',
                ...((isDefaultColor || isInheritColor) && {
                    border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
                }),
                ...(isDefaultColor && {
                    ...(!isLightMode && {
                        color: theme.palette.text.secondary,
                    }),
                }),
                '&:hover': {
                    borderColor: 'currentColor',
                    boxShadow: '0 0 0 0.5px currentColor',
                    backgroundColor: theme.palette.action.hover,
                },
            }),
            // SOFT
            ...((isSoft || isSoftExtended) && {
                boxShadow: 'none',
                ...(isDefaultColor && {
                    color: theme.palette.grey[800],
                    backgroundColor: theme.palette.grey[300],
                    '&:hover': {
                        backgroundColor: theme.palette.grey[400],
                    },
                }),
                ...(isInheritColor && {
                    backgroundColor: alpha(theme.palette.grey[500], 0.08),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.grey[500], 0.24),
                    },
                }),
            }),
        };

        const colorVariants = FAB_COLORS.map((color) => ({
            ...(state.color === color && {
                // FILLED
                ...((isCircular || isExtended) && {
                    boxShadow: theme.customShadows[color],
                    '&:hover': {
                        backgroundColor: theme.palette[color].dark,
                    },
                }),
                // OUTLINED
                ...((isOutlined || isOutlinedExtended) && {
                    color: theme.palette[color].main,
                    border: `solid 1px ${alpha(theme.palette[color].main, 0.48)}`,
                    '&:hover': {
                        backgroundColor: alpha(theme.palette[color].main, 0.08),
                    },
                }),
                // SOFT
                ...((isSoft || isSoftExtended) && {
                    color: theme.palette[color][isLightMode ? 'dark' : 'light'],
                    backgroundColor: alpha(theme.palette[color].main, 0.16),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette[color].main, 0.32),
                    },
                }),
            }),
        }));

        const disabledStyles = {
            [`&.${fabClasses.disabled}`]: {
                ...((isOutlined || isOutlinedExtended) && {
                    backgroundColor: 'transparent',
                    border: `solid 1px ${theme.palette.action.disabledBackground}`,
                }),
            },
        };

        const sizeStyles = {
            ...((isExtended || isOutlinedExtended || isSoftExtended) && {
                width: 'auto',
                '& svg': {
                    marginRight: theme.spacing(1),
                },
                ...(state.size === 'small' && {
                    height: 34,
                    minHeight: 34,
                    borderRadius: 17,
                    padding: theme.spacing(0, 1),
                }),
                ...(state.size === 'medium' && {
                    height: 40,
                    minHeight: 40,
                    borderRadius: 20,
                    padding: theme.spacing(0, 2),
                }),
                ...(state.size === 'large' && {
                    height: 48,
                    minHeight: 48,
                    borderRadius: 24,
                    padding: theme.spacing(0, 2),
                }),
            }),
        };

        return [baseStyles, ...colorVariants, disabledStyles, sizeStyles];
    };

    return {
        MuiFab: {
            styleOverrides: {
                root: ({ ownerState }) => generateFabStyles(ownerState),
            },
        },
    };
}
