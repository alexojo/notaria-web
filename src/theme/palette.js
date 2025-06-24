import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// COLORS

export const grey = {
    0:   '#FFFFFF',
    100: '#F8F9FA',
    200: '#EBEFF2',
    300: '#D8DEE3',
    400: '#BCC3CB',
    500: '#8F99A5',
    600: '#5D6975',
    700: '#3E4A53',
    800: '#1C252E',
    900: '#11171C',
};

export const primary = {
    lighter: '#59648C',
    light: '#3C4571',
    main: '#111C4E',
    dark: '#0D163F',
    darker: '#0A1233',
    contrastText: '#FFFFFF',
};

export const secondary = {
    lighter: '#CFE3F5',
    light: '#B3D1ED',
    main: '#99BAE3',
    dark: '#749AC3',
    darker: '#52738D',
    contrastText: '#FFFFFF',
};

export const info = {
    lighter: '#CAFCF4',
    light: '#61EDED',
    main: '#03A7C5',
    dark: '#01628D',
    darker: '#00325E',
    contrastText: '#FFFFFF',
};

export const success = {
    lighter: '#17B451',
    light: '#6EE883',
    main: '#17B451',
    dark: '#0B814E',
    darker: '#045643',
    contrastText: '#ffffff',
};

export const warning = {
    lighter: '#FDF4CC',
    light: '#F8D267',
    main: '#EA9E07',
    dark: '#A86503',
    darker: '#703B01',
    contrastText: grey[800],
};

export const error = {
    lighter: '#FCE3D6',
    light: '#F19483',
    main: '#D13234',
    dark: '#961930',
    darker: '#64092A',
    contrastText: '#FFFFFF',
};

export const common = {
    black: '#000000',
    white: '#FFFFFF',
};

export const action = {
    hover: alpha(grey[500], 0.08),
    selected: alpha(grey[500], 0.16),
    disabled: alpha(grey[500], 0.8),
    disabledBackground: alpha(grey[500], 0.24),
    focus: alpha(grey[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
};

const base = {
    primary,
    secondary,
    info,
    success,
    warning,
    error,
    grey,
    common,
    divider: alpha(grey[500], 0.2),
    action,
};

// ----------------------------------------------------------------------

export function palette(mode) {
    const light = {
        ...base,
        mode: 'light',
        text: {
            primary: grey[800],
            secondary: grey[600],
            disabled: grey[500],
        },
        background: {
            paper: '#FFFFFF',
            default: '#FFFFFF',
            neutral: grey[200],
            sidebar: grey[900],
            avatar: primary.main,
        },
        action: {
            ...base.action,
            active: grey[600],
        },
    };

    const dark = {
        ...base,
        mode: 'dark',
        text: {
            primary: '#FFFFFF',
            secondary: grey[500],
            disabled: grey[600],
        },
        background: {
            paper: grey[800],
            default: grey[900],
            neutral: alpha(grey[500], 0.12),
            sidebar: grey[800],
            avatar: primary.lighter,
        },
        action: {
            ...base.action,
            active: grey[500],
        },
    };

    return mode === 'light' ? light : dark;
}
