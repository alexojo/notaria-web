import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

// ----------------------------------------------------------------------

export function FormSwitch({ name, helperText, label, slotProps = {}, ...props }) {

    const { control } = useFormContext();

    const ariaLabel = label ? undefined : `Switch ${name}`;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Box sx={slotProps.wrap}>
                    <FormControlLabel
                        control={
                            <Switch
                                {...field}
                                checked={Boolean(field.value)}
                                color='default'
                                {...slotProps.switch}
                                inputProps={{
                                    'aria-label': ariaLabel,
                                    ...slotProps.switch?.inputProps,
                                }}

                            />
                        }
                        label={label}
                        {...props}
                    />

                    {(error || helperText) && (
                        <FormHelperText
                            error={Boolean(error)}
                            {...slotProps.formHelperText}
                            sx={slotProps.formHelperText?.sx}
                        >
                            {error?.message || helperText}
                        </FormHelperText>
                    )}
                </Box>
            )}
        />
    );
}

FormSwitch.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    helperText: PropTypes.string,
    slotProps: PropTypes.object,
};