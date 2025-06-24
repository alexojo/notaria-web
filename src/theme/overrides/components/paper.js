import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function paper(theme) {
    
    return {
        MuiPaper: {
            styleOverrides: {
                outlined: {
                    borderColor: alpha(theme.palette.grey[500], 0.16),
                },
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    };
}
