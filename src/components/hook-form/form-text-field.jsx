import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

// --------------------------------------------

export function FormTextField({ name, helperText, type, autoFocus, ...other }) {

    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (

                <TextField

                    {...field}
                    fullWidth
                    type={type}
                    value={type === 'number' && field.value === 0 ? '' : field.value}

                    onChange={(e) => {
                        const value = type === 'number' ? Number(e.target.value) : e.target.value;
                        field.onChange(value);
                    }}

                    error={Boolean(error)}
                    helperText={error?.message || helperText}
                    inputProps={{ autoComplete: 'off' }}
                    autoFocus={autoFocus}
                    {...other}

                />

            )}
        />
    );
}

FormTextField.propTypes = {
    autoFocus: PropTypes.bool,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    helperText: PropTypes.string,
};
