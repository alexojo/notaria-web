import { alpha } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export function textField(theme) {
    
    const colorVariants = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled,
    };

    const typographyStyles = {
        label: theme.typography.body1,
        input: theme.typography.body2,
    };

    const generateLabelStyles = {
        root: {
            ...typographyStyles.input,
            color: colorVariants.placeholder,
            [`&.${inputLabelClasses.shrink}`]: {
                ...typographyStyles.label,
                fontWeight: 600,
                color: colorVariants.active,
                [`&.${inputLabelClasses.focused}`]: {
                    color: colorVariants.focused,
                },
                [`&.${inputLabelClasses.error}`]: {
                    color: theme.palette.error.main,
                },
                [`&.${inputLabelClasses.disabled}`]: {
                    color: theme.palette.text.disabled,
                },
                [`&.${inputLabelClasses.filled}`]: {
                    transform: 'translate(12px, 6px) scale(0.75)',
                },
            },
        },
    };

    const generateBaseInputStyles = {
        root: {
            [`&.${inputBaseClasses.disabled}`]: {
                '& svg': {
                    color: theme.palette.text.disabled,
                },
            },
        },
        input: {
            ...typographyStyles.input,
            '&::placeholder': {
                opacity: 1,
                color: colorVariants.placeholder,
            },
        },
    };

    const generateOutlinedInputStyles = {
        root: {
            [`&.${outlinedInputClasses.focused}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: colorVariants.focused,
                },
            },
            [`&.${outlinedInputClasses.error}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.error.main,
                },
            },
            [`&.${outlinedInputClasses.disabled}`]: {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: theme.palette.action.disabledBackground,
                },
            },
        },
        notchedOutline: {
            borderColor: alpha(theme.palette.grey[500], 0.2),
            transition: theme.transitions.create(['border-color'], {
                duration: theme.transitions.duration.shortest,
            }),
        },
    };

    const generateFilledInputStyles = {
        root: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.grey[500], 0.08),
            '&:hover': {
                backgroundColor: alpha(theme.palette.grey[500], 0.16),
            },
            [`&.${filledInputClasses.focused}`]: {
                backgroundColor: alpha(theme.palette.grey[500], 0.16),
            },
            [`&.${filledInputClasses.error}`]: {
                backgroundColor: alpha(theme.palette.error.main, 0.08),
                [`&.${filledInputClasses.focused}`]: {
                    backgroundColor: alpha(theme.palette.error.main, 0.16),
                },
            },
            [`&.${filledInputClasses.disabled}`]: {
                backgroundColor: theme.palette.action.disabledBackground,
            },
        },
    };

    const generateInputUnderlineStyles = {
        underline: {
            '&:before': {
                borderBottomColor: alpha(theme.palette.grey[500], 0.32),
            },
            '&:after': {
                borderBottomColor: colorVariants.focused,
            },
        },
    };

    return {
        // HELPER
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1),
                },
            },
        },

        // LABEL
        MuiFormLabel: {
            styleOverrides: generateLabelStyles,
        },

        // BASE
        MuiInputBase: {
            styleOverrides: generateBaseInputStyles,
        },

        // STANDARD
        MuiInput: {
            styleOverrides: generateInputUnderlineStyles,
        },

        // OUTLINED
        MuiOutlinedInput: {
            styleOverrides: generateOutlinedInputStyles,
        },

        // FILLED
        MuiFilledInput: {
            styleOverrides: generateFilledInputStyles,
        },
    };
}
