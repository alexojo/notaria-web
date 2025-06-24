

export function list(theme) {

    return {
        
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
                multiline: {
                    margin: 0,
                },
            },
        },
    };
}
