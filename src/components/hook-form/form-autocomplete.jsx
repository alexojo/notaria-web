import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

export function FormAutocomplete({ name, label, variant = 'outlined', helperText, placeholder, ...props }) {
    
    const { control, setValue } = useFormContext();

    return (

        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (

                <Autocomplete
                    {...field}
                    id={`form-autocomplete-${name}`}
                    onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
                    renderInput={(params) => (

                        <TextField
                            {...params}
                            error={Boolean(error)}
                            helperText={error?.message || helperText}
                            label={label}
                            placeholder={placeholder}
                            variant={variant}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                            }}
                        />

                    )}
                    {...props}
                />
            )}
        />
    );
}

FormAutocomplete.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
    helperText: PropTypes.string,
    placeholder: PropTypes.string,
};