import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

export function FormSelect({
    name,
    native = false,
    children,
    slotProps = {},
    helperText,
    inputProps = {},
    InputLabelProps = {},
    ...props
}) {
    const { control } = useFormContext();

    const labelId = `${name}-select-label`;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    select
                    fullWidth
                    SelectProps={{
                        native,
                        MenuProps: {
                            PaperProps: {
                                sx: {
                                    maxHeight: 220,
                                    ...slotProps.paper,
                                },
                            },
                        },
                        sx: { textTransform: 'capitalize' },
                    }}
                    InputLabelProps={{ htmlFor: labelId, ...InputLabelProps }}
                    inputProps={{ id: labelId, ...inputProps }}
                    error={Boolean(error)}
                    helperText={error?.message || helperText}
                    {...props}
                >
                    {children}
                </TextField>
            )}
        />
    );
}

FormSelect.propTypes = {
    name: PropTypes.string.isRequired,
    native: PropTypes.bool,
    children: PropTypes.node.isRequired,
    helperText: PropTypes.string,
    slotProps: PropTypes.object,
    inputProps: PropTypes.object,
    InputLabelProps: PropTypes.object,
};