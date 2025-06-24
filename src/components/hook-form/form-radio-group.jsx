import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export function FormRadioGroup({ name, label, options = [], helperText, slotProps = {}, ...props }) {

    const { control } = useFormContext();

    const labelledBy = `${name}-radiobuttons-label`;
    const getAriaLabel = (value) => `Radio ${value}`;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormControl component="fieldset" sx={slotProps.wrap}>
                    {label && (
                        <FormLabel
                            id={labelledBy}
                            component="legend"
                            sx={{ mb: 1, typography: 'body2', ...slotProps.formLabel?.sx }}
                            {...slotProps.formLabel}
                        >
                            {label}
                        </FormLabel>
                    )}

                    <RadioGroup {...field} aria-labelledby={labelledBy} {...props}>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={
                                    <Radio
                                        {...slotProps.radio}
                                        inputProps={{
                                            'aria-label': option.label ? undefined : getAriaLabel(option.label),
                                            ...slotProps.radio?.inputProps,
                                        }}
                                        color = 'default'
                                    />
                                }
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>

                    {(error || helperText) && (
                        <FormHelperText error={Boolean(error)} sx={{ mx: 0 }} {...slotProps.formHelperText}>
                            {error?.message || helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
}

FormRadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        }),
    ),
    helperText: PropTypes.string,
    slotProps: PropTypes.object,
};