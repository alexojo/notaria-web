

export function select( ) {
    
    return {
        MuiNativeSelect: {
            styleOverrides: {
                icon: {
                    right: 10,
                    width: 18,
                    height: 18,
                    top: 'calc(50% - 9px)',
                },
            },
        },

        MuiSelect: {
            styleOverrides: {
                icon: {
                    right: 10,
                    width: 18,
                    height: 18,
                    top: 'calc(50% - 9px)',
                },
            },
        },
    };
}
