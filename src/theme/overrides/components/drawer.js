import { alpha } from '@mui/material/styles';
import { drawerClasses } from '@mui/material/Drawer';

import { paper } from '../../css';

// ----------------------------------------------------------------------

export function drawer(theme) {
    
    const isLightMode = theme.palette.mode === 'light';

    const generateBoxShadow = (anchor) => {
        const shadowColor = alpha(
            isLightMode ? theme.palette.grey[900] : theme.palette.common.black,
            0.24
        );

        return anchor === 'left' ? `40px 40px 80px -8px ${shadowColor}` : `-40px 40px 80px -8px ${shadowColor}`;
    };

    return {
        MuiDrawer: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'temporary' && {
                        [`& .${drawerClasses.paper}`]: {
                            ...paper({ theme }),
                            ...(ownerState.anchor && {
                                boxShadow: generateBoxShadow(ownerState.anchor),
                            }),
                        },
                    }),
                }),
            },
        },
    };
}
