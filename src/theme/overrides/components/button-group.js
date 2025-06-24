import { alpha } from '@mui/material/styles';
import { buttonGroupClasses } from '@mui/material/ButtonGroup';

// ----------------------------------------------------------------------

const VARIANT_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];


export function buttonGroup(theme) {

    const generateRootStyles = (state) => {

        const isColorInherit = state.color === 'inherit';
        const isContained = state.variant === 'contained';
        const isOutlined = state.variant === 'outlined';
        const isText = state.variant === 'text';
        const isSoft = state.variant === 'soft';
        const isHorizontal = state.orientation === 'horizontal';
        const isVertical = state.orientation === 'vertical';

        const baseStyles = {
            [`& .${buttonGroupClasses.grouped}`]: {
                '&:not(:last-of-type)': {
                    ...(!isOutlined && {
                        borderStyle: 'solid',
                        ...(isColorInherit && {
                            borderColor: alpha(theme.palette.grey[500], 0.32),
                        }),
                        ...(isHorizontal && { borderWidth: '0px 1px 0px 0px' }),
                        ...(isVertical && { borderWidth: '0px 0px 1px 0px' }),
                    }),
                },
            },
        };

        const variantStyles = VARIANT_COLORS.map((variantColor) => ({
            [`& .${buttonGroupClasses.grouped}`]: {
                '&:not(:last-of-type)': {
                    ...(!isOutlined && {
                        ...(state.color === variantColor && {
                            ...(isContained && {
                                borderColor: alpha(theme.palette[variantColor].dark, 0.48),
                            }),
                            ...(isText && {
                                borderColor: alpha(theme.palette[variantColor].main, 0.48),
                            }),
                            ...(isSoft && {
                                borderColor: alpha(theme.palette[variantColor].dark, 0.24),
                            }),
                        }),
                    }),
                },
            },
        }));

        const disabledStyles = {
            [`& .${buttonGroupClasses.grouped}`]: {
                [`&.${buttonGroupClasses.disabled}`]: {
                    '&:not(:last-of-type)': {
                        borderColor: theme.palette.action.disabledBackground,
                    },
                },
            },
        };

        return [baseStyles, ...variantStyles, disabledStyles];
    };

    return {
        MuiButtonGroup: {
            styleOverrides: {
                root: ({ ownerState }) => generateRootStyles(ownerState),
            },
        },
    };
}
