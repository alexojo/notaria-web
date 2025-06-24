import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { dateFormats } from '../../utils/format-time';

// --------------------------------------------

export function FormDatePicker({ name, slotProps = {}, ...props }) {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (

                <DatePicker
                    {...field}
                    format={ dateFormats.slashed.date }
                    onChange={(newValue) => field.onChange(dayjs(newValue).format())}
                    value={dayjs(field.value)}

                    slotProps={{
                        ...slotProps,
                        textField: {
                            fullWidth: true,
                            error: Boolean(error),
                            helperText: error?.message || slotProps?.textField?.helperText,
                            ...slotProps?.textField,
                        },
                    }}
                    {...props}
                />
            )}
        />
    );
}

FormDatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    slotProps: PropTypes.object,
};