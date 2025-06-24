// ----------------------------------------------------------------------

export function tooltip(theme) {

    const isLightMode = theme.palette.mode === 'light';

    return {
        
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLightMode ? 800 : 700],
                },
                arrow: {
                    color: theme.palette.grey[isLightMode ? 800 : 700],
                },
            },
        },
    };
}
