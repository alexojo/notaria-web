import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export function FormCheckbox({ name, helperText, label, slotProps = {}, ...props }) {

    const { control } = useFormContext();

    const ariaLabel = label ? undefined : `Checkbox ${name}`;

    return (
        <Controller
        
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Box sx={slotProps.wrap}>

                    <FormControlLabel
                        control={
                            <Checkbox
                                {...field}
                                checked={!!field.value}
                                inputProps={{
                                    'aria-label': ariaLabel,
                                    ...slotProps.checkbox?.inputProps,
                                }}
                                color='default'
                                {...slotProps.checkbox}
                            />
                        }
                        label={label}
                        {...props}
                    />

                    {(error || helperText) && (
                        <FormHelperText error={!!error} {...slotProps.formHelperText}>
                            {error?.message || helperText}
                        </FormHelperText>
                    )}
                </Box>
            )}
        />
    );
}

FormCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    helperText: PropTypes.string,
    slotProps: PropTypes.object,
};