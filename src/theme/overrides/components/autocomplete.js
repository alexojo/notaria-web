import { alpha } from '@mui/material/styles';
import { svgIconClasses } from '@mui/material/SvgIcon';
import { autocompleteClasses } from '@mui/material/Autocomplete';

import { paper, menuItem } from '../../css';

// ----------------------------------------------------------------------

export function autocomplete(theme) {
    
    const rootStyles = {
        [`& span.${autocompleteClasses.tag}`]: {
            ...theme.typography.subtitle2,
            height: 24,
            minWidth: 24,
            lineHeight: '24px',
            textAlign: 'center',
            padding: theme.spacing(0, 0.75),
            color: theme.palette.text.secondary,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
        },
    };

    const listboxStyles = {
        padding: 0,
        [`& .${autocompleteClasses.option}`]: {
            ...menuItem(theme),
        },
    };

    const endAdornmentStyles = {
        [`& .${svgIconClasses.root}`]: {
            width: 18,
            height: 18,
        },
    };

    return {
        MuiAutocomplete: {
            styleOverrides: {
                root: rootStyles,
                paper: {
                    ...paper({ theme, dropdown: true }),
                },
                listbox: listboxStyles,
                endAdornment: endAdornmentStyles,
            },
        },
    };
}
