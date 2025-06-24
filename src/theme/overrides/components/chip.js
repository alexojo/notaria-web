import { alpha } from '@mui/material/styles';
import { chipClasses } from '@mui/material/Chip';

// ----------------------------------------------------------------------

const CHIP_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];


export function chip(theme) {
    
    const isLightMode = theme.palette.mode === 'light';

    const generateRootStyles = (state) => {
        const isDefaultColor = state.color === 'default';
        const isFilled = state.variant === 'filled';
        const isOutlined = state.variant === 'outlined';
        const isSoft = state.variant === 'soft';

        const baseStyles = {
            [`& .${chipClasses.deleteIcon}`]: {
                opacity: 0.48,
                color: 'currentColor',
                '&:hover': {
                    opacity: 1,
                    color: 'currentColor',
                },
            },
            ...(isDefaultColor && {
                [`& .${chipClasses.avatar}`]: {
                    color: theme.palette.text.primary,
                },
                ...(isFilled && {
                    color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: theme.palette.text.primary,
                    '&:hover': {
                        backgroundColor: isLightMode ? theme.palette.grey[700] : theme.palette.grey[100],
                    },
                    [`& .${chipClasses.icon}`]: {
                        color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
                    },
                }),
                ...(isOutlined && {
                    border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
                }),
                ...(isSoft && {
                    color: theme.palette.text.primary,
                    backgroundColor: alpha(theme.palette.grey[500], 0.16),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.grey[500], 0.32),
                    },
                }),
            }),
        };

        const variantStyles = CHIP_COLORS.map((variantColor) => ({
            ...(state.color === variantColor && {
                [`& .${chipClasses.avatar}`]: {
                    color: theme.palette[variantColor].lighter,
                    backgroundColor: theme.palette[variantColor].dark,
                },
                ...(isSoft && {
                    color: theme.palette[variantColor][isLightMode ? 'dark' : 'light'],
                    backgroundColor: alpha(theme.palette[variantColor].main, 0.16),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette[variantColor].main, 0.32),
                    },
                }),
            }),
        }));

        const disabledStyles = {
            [`&.${chipClasses.disabled}`]: {
                opacity: 1,
                color: theme.palette.action.disabled,
                [`& .${chipClasses.icon}`]: {
                    color: theme.palette.action.disabled,
                },
                [`& .${chipClasses.avatar}`]: {
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.action.disabledBackground,
                },
                ...(isFilled && {
                    backgroundColor: theme.palette.action.disabledBackground,
                }),
                ...(isOutlined && {
                    borderColor: theme.palette.action.disabledBackground,
                }),
                ...(isSoft && {
                    backgroundColor: theme.palette.action.disabledBackground,
                }),
            },
        };

        const commonStyles = {
            fontWeight: 500,
            borderRadius: theme.shape.borderRadius,
        };

        return [baseStyles, ...variantStyles, disabledStyles, commonStyles];
    };

    return {
        MuiChip: {
            styleOverrides: {
                root: ({ ownerState }) => generateRootStyles(ownerState),
            },
        },
    };
}
