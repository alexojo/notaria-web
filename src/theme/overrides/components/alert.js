import { alpha } from '@mui/material/styles';
import { alertClasses } from '@mui/material/Alert';

// ----------------------------------------------------------------------

const COLORS = ['info', 'success', 'warning', 'error'];

export function alert(theme) {

    const isLightMode = theme.palette.mode === 'light';

    const getColorStyles = ( color, variant ) => {

        const { palette } = theme;

        const colorVariants = {
            standard: {
                color: palette[color][isLightMode ? 'darker' : 'lighter'],
                backgroundColor: palette[color][isLightMode ? 'lighter' : 'darker'],
                [`& .${alertClasses.icon}`]: {
                    color: palette[color][isLightMode ? 'main' : 'light'],
                },
            },
            filled: {
                color: palette[color].contrastText,
                backgroundColor: palette[color].main,
            },
            outlined: {
                backgroundColor: alpha(palette[color].main, 0.08),
                color: palette[color][isLightMode ? 'dark' : 'light'],
                border: `solid 1px ${alpha(palette[color].main, 0.16)}`,
                [`& .${alertClasses.icon}`]: {
                    color: palette[color].main,
                },
            },
        };

        return colorVariants[variant];
    };

    const rootStyles = (ownerState) => {

        const { variant } = ownerState;

        const colorStyles = COLORS.map((color) =>
            ownerState.severity === color ? getColorStyles(ownerState, color, variant) : null
        );

        return colorStyles.filter(Boolean);
    };

    return {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => rootStyles(ownerState),
                icon: {
                    opacity: 1,
                },
            },
        },
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    marginBottom: theme.spacing(0.5),
                    fontWeight: theme.typography.fontWeightSemiBold,
                },
            },
        },
    };
}
