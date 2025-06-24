import { loadingButtonClasses } from '@mui/lab/LoadingButton';

// -----------------------------------------------------------------------

export function loadingButton(theme) {

    return {

        MuiLoadingButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({

                    backgroundColor:
                        theme.palette.mode === 'light'
                            ? theme.palette.primary.main
                            : theme.palette.secondary.main,

                    color: theme.palette.mode === 'light' 
                            ? theme.palette.primary.contrastText 
                            : theme.palette.background.paper,

                    '&:hover': {
                        backgroundColor:
                            theme.palette.mode === 'light'
                                ? theme.palette.primary.dark
                                : theme.palette.secondary.light,
                    },


                    ...(ownerState.variant === 'soft' && {
                        [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                            left: 10,
                        },
                        [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                            right: 14,
                        },
                        ...(ownerState.size === 'small' && {
                            [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                                left: 10,
                            },
                            [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                                right: 10,
                            },
                        }),
                    }),


                }),
            },
        },
    };
}
