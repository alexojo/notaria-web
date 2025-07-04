export function card(theme) {
    
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    boxShadow: theme.customShadows.card,
                    borderRadius: theme.shape.borderRadius * 2,
                    zIndex: 0,
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0),
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3),
                },
            },
        },
    };
}
