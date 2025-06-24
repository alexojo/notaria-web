import 'dayjs/locale/en';
import 'dayjs/locale/vi';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/ar-sa';
import PropTypes from 'prop-types';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';

// ----------------------------------------------------------------------

export function LocalizationProvider({ children, locale = 'en' }) {

    dayjs.locale(locale);

    return (
        <Provider dateAdapter={AdapterDayjs}  adapterLocale={locale}>
            {children}
        </Provider>
    );
}

LocalizationProvider.propTypes = {
    children: PropTypes.node,
    locale: PropTypes.oneOf(['en', 'vi', 'fr', 'zh-cn', 'ar-sa']),
};
