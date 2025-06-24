import { alpha } from '@mui/material/styles';
import { buttonClasses } from '@mui/material/Button';

// ----------------------------------------------------------------------

const BUTTON_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];


export function button(theme) {
    
    const isLightMode = theme.palette.mode === 'light';

    const generateRootStyles = (state) => {

        const isColorInherit = state.color === 'inherit';
        const isContained = state.variant === 'contained';
        const isOutlined = state.variant === 'outlined';
        const isText = state.variant === 'text';
        const isSoft = state.variant === 'soft';
        const isSmall = state.size === 'small';
        const isMedium = state.size === 'medium';
        const isLarge = state.size === 'large';

        const baseStyles = {
            ...(isColorInherit && {
                ...(isContained && {
                    color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: isLightMode ? theme.palette.grey[800] : theme.palette.common.white,
                    '&:hover': {
                        backgroundColor: isLightMode ? theme.palette.grey[700] : theme.palette.grey[400],
                    },
                }),
                ...(isOutlined && {
                    borderColor: alpha(theme.palette.grey[500], 0.32),
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    },
                }),
                ...(isText && {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    },
                }),
                ...(isSoft && {
                    color: theme.palette.text.primary,
                    backgroundColor: alpha(theme.palette.grey[500], 0.08),
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.grey[500], 0.24),
                    },
                }),
            }),
            ...(isOutlined && {
                '&:hover': {
                    borderColor: 'currentColor',
                    boxShadow: '0 0 0 0.5px currentColor',
                },
            }),
        };

        const variantStyles = BUTTON_COLORS.map((variantColor) => ({
            ...(state.color === variantColor && {
                ...(isContained && {
                    '&:hover': {
                        boxShadow: theme.customShadows[variantColor],
                    },
                }),
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
            [`&.${buttonClasses.disabled}`]: {
                ...(isSoft && {
                    backgroundColor: theme.palette.action.disabledBackground,
                }),
            },
        };

        const sizeStyles = {
            ...(isSmall && {
                height: 30,
                fontSize: 13,
                paddingLeft: 8,
                paddingRight: 8,
                ...(isText && {
                    paddingLeft: 4,
                    paddingRight: 4,
                }),
            }),
            ...(isMedium && {
                paddingLeft: 12,
                paddingRight: 12,
                ...(isText && {
                    paddingLeft: 8,
                    paddingRight: 8,
                }),
            }),
            ...(isLarge && {
                height: 48,
                fontSize: 15,
                paddingLeft: 16,
                paddingRight: 16,
                ...(isText && {
                    paddingLeft: 10,
                    paddingRight: 10,
                }),
            }),
        };

        return [baseStyles, ...variantStyles, disabledStyles, sizeStyles];
    };

    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => generateRootStyles(ownerState),
            },
        },
    };
}
