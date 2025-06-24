import { alpha } from '@mui/material/styles';
import { avatarGroupClasses } from '@mui/material/AvatarGroup';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];

const colorByFirsLetter = (name) => {

    const colorMapping = {
        a: 'primary', c: 'primary', f: 'primary',
        e: 'secondary', d: 'secondary', h: 'secondary',
        i: 'info', k: 'info', l: 'info',
        m: 'success', n: 'success', p: 'success',
        q: 'warning', s: 'warning', t: 'warning',
        v: 'error', x: 'error', y: 'error',
    };

    return colorMapping[name.charAt(0).toLowerCase()] || 'default';
};

// ----------------------------------------------------------------------

export function avatar(theme) {

    const avatarVariants = COLORS.map((color) =>
        color === 'default'
            ? {
                props: { color: 'default' },
                style: {
                    color: theme.palette.text.secondary,
                    backgroundColor: alpha(theme.palette.grey[500], 0.24),
                },
            }
            : {
                props: { color },
                style: {
                    color: theme.palette[color].contrastText,
                    backgroundColor: theme.palette[color].main,
                },
            }
    );

    const roundedStyle = {
        borderRadius: theme.shape.borderRadius * 1.5,
    };

    const colorDefaultStyle = ({ ownerState }) => {
        const color = colorByFirsLetter(`${ownerState.alt}`);

        return {
            ...(!!ownerState.alt && {
                ...(color !== 'default'
                    ? {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main,
                    }
                    : {
                        color: theme.palette.text.secondary,
                        backgroundColor: alpha(theme.palette.grey[500], 0.24),
                    }),
            }),
        };
    };

    const avatarGroupRootStyle = ({ ownerState }) => ({
        justifyContent: 'flex-end',
        ...(ownerState.variant === 'compact' && {
            width: 40,
            height: 40,
            position: 'relative',
            [`& .${avatarGroupClasses.avatar}`]: {
                margin: 0,
                width: 28,
                height: 28,
                position: 'absolute',
                '&:first-of-type': {
                    left: 0,
                    bottom: 0,
                    zIndex: 9,
                },
                '&:last-of-type': {
                    top: 0,
                    right: 0,
                },
            },
        }),
    });

    const avatarGroupAvatarStyle = {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightSemiBold,
        '&:first-of-type': {
            fontSize: 12,
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.lighter,
        },
    };

    return {
        MuiAvatar: {
            variants: avatarVariants,
            styleOverrides: {
                rounded: roundedStyle,
                colorDefault: colorDefaultStyle,
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: avatarGroupRootStyle,
                avatar: avatarGroupAvatarStyle,
            },
        },
    };
}
