import { alpha } from '@mui/material/styles';
import { switchClasses } from '@mui/material/Switch';

// ----------------------------------------------------------------------

export function switches(theme) {
    const isLightMode = theme.palette.mode === 'light';

    const generateSwitchStyles = (state) => {
        const { color } = state;

        const baseStyles = {
            width: 58,
            height: 38,
            padding: '9px 13px 9px 12px',
            [`& .${switchClasses.thumb}`]: {
                width: 14,
                height: 14,
                boxShadow: 'none',
                color: theme.palette.common.white,
            },
            [`& .${switchClasses.track}`]: {
                opacity: 1,
                borderRadius: 14,
                backgroundColor: alpha(theme.palette.grey[500], 0.48),
            },
            [`& .${switchClasses.switchBase}`]: {
                left: 3,
                padding: 12,
                [`&.${switchClasses.checked}`]: {
                    transform: 'translateX(13px)',
                    [`& .${switchClasses.thumb}`]: {
                        ...(color === 'default' && !isLightMode && {
                            color: theme.palette.grey[800],
                        }),
                    },
                    [`&+.${switchClasses.track}`]: {
                        opacity: 1,
                        ...(color === 'default' && {
                            backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main,
                        }),
                    },
                },
                [`&.${switchClasses.disabled}`]: {
                    [`& .${switchClasses.thumb}`]: {
                        opacity: isLightMode ? 1 : 0.48,
                    },
                    [`&+.${switchClasses.track}`]: {
                        opacity: 0.48,
                    },
                },
            },
        };

        const smallStyles = {
            [`&.${switchClasses.sizeSmall}`]: {
                padding: '4px 8px 4px 7px',
                width: 40,
                height: 24,
                [`& .${switchClasses.thumb}`]: {
                    width: 10,
                    height: 10,
                },
                [`& .${switchClasses.switchBase}`]: {
                    padding: 7,
                    [`&.${switchClasses.checked}`]: {
                        transform: 'translateX(9px)',
                    },
                },
            },
        };

        return [baseStyles, smallStyles];
    };

    return {
        MuiSwitch: {
            styleOverrides: {
                root: ({ ownerState }) => generateSwitchStyles(ownerState),
            },
        },
    };
}
