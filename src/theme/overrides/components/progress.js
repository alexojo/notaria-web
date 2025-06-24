import { alpha } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';

// ----------------------------------------------------------------------

const PROGRESS_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export function progress(theme) {
    
    const generateProgressStyles = (state) => {
        const isBuffer = state.variant === 'buffer';

        const baseStyles = {
            borderRadius: 4,
            [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 4,
            },
            ...(isBuffer && {
                backgroundColor: 'transparent',
            }),
        };

        const colorVariants = PROGRESS_COLORS.map((color) => ({
            ...(state.color === color && {
                backgroundColor: alpha(theme.palette[color].main, 0.24),
            }),
        }));

        return [baseStyles, ...colorVariants];
    };

    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: ({ ownerState }) => generateProgressStyles(ownerState),
            },
        },
    };
}
