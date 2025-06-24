import { buttonClasses } from '@mui/material/Button';

import IconWrapper from 'src/components/iconwrapper';

// ----------------------------------------------------------------------

const DATE_PICKERS = [
    'DatePicker',
    'DateTimePicker',
    'StaticDatePicker',
    'DesktopDatePicker',
    'DesktopDateTimePicker',
    'MobileDatePicker',
    'MobileDateTimePicker',
];

const TIME_PICKERS = ['TimePicker', 'MobileTimePicker', 'StaticTimePicker', 'DesktopTimePicker'];

const getSwitchIcon = () => <IconWrapper icon="eva:chevron-down-fill" width={24} />;
const getLeftIcon = () => <IconWrapper icon="eva:arrow-ios-back-fill" width={24} />;
const getRightIcon = () => <IconWrapper icon="eva:arrow-ios-forward-fill" width={24} />;
const getCalendarIcon = () => <IconWrapper icon="solar:calendar-minimalistic-bold-duotone" width={24} />;
const getClockIcon = () => <IconWrapper icon="solar:clock-circle-bold-duotone" width={24} />;

const desktopDatePickers = DATE_PICKERS.reduce((accumulated, pickerType) => {
    accumulated[`Mui${pickerType}`] = {
        defaultProps: {
            slots: {
                openPickerIcon: getCalendarIcon,
                leftArrowIcon: getLeftIcon,
                rightArrowIcon: getRightIcon,
                switchViewIcon: getSwitchIcon,
            },
        },
    };

    return accumulated;

}, {});

const timePickerComponents = TIME_PICKERS.reduce((accumulated, pickerType) => {
    accumulated[`Mui${pickerType}`] = {
        defaultProps: {
            slots: {
                openPickerIcon: getClockIcon,
                rightArrowIcon: getRightIcon,
                switchViewIcon: getSwitchIcon,
            },
        },
    };

    return accumulated;
    
}, {});

// ----------------------------------------------------------------------

export function datePicker(theme) {
    return {
        MuiPickersLayout: {
            styleOverrides: {
                root: {
                    '& .MuiPickersLayout-actionBar': {
                        [`& .${buttonClasses.root}:last-of-type`]: {
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[800],
                        },
                    },
                },
            },
        },

        // Date Pickers
        ...desktopDatePickers,

        // Time Pickers
        ...timePickerComponents,
    };
}
