import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

// --------------------------------------------

dayjs.extend(duration);
dayjs.extend(relativeTime);

// --------------------------------------------

export const dateFormats = {
    standard: {
        dateTime: 'DD MMM YYYY h:mm a', // Example: 21 Jan 2001 12:00 am
        date: 'DD MMM YYYY', // Example: 21 Jan 2001
        time: 'h:mm a', // Example: 12:00 am
    },
    slashed: {
        dateTime: 'DD/MM/YYYY h:mm a', // Example: 21/01/2001 12:00 am
        date: 'DD/MM/YYYY', // Example: 21/01/2001
    },
    dashed: {
        dateTime: 'DD-MM-YYYY h:mm a', // Example: 21-01-2001 12:00 am
        date: 'DD-MM-YYYY', // Example: 21-01-2001
    },
};

