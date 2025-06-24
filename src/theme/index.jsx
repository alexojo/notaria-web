import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
import { createPresets } from './options/presets';
import { useSettingsContext } from '../components/settings/context';

// ------------------------------------------------

export default function ThemeProvider({ children }) {

    const settings = useSettingsContext();

    const colorPresets = createPresets( settings.themeColor );

    const memoizedValue = useMemo(
        
        () => ({
            palette:{
                ...palette(settings.themeMode),
                ...colorPresets.palette,
            },
            customShadows: {
                ...customShadows(settings.themeMode),
                ...colorPresets.customShadows,
            },
            shadows: shadows(settings.themeMode),
            shape: { borderRadius: 8 },
            typography,
        }),
        // Dependencies to recalculate themeOptions when these values change
        [ settings.themeMode, colorPresets.palette, colorPresets.customShadows ]
    );

    const theme = createTheme( memoizedValue );

    theme.components = componentsOverrides(theme);

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );

}

ThemeProvider.propTypes = {
    children: PropTypes.node,
};