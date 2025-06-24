import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------

export function useResponsiveMedia(query, start, end) {

    const theme = useTheme();

    const mediaQueries = {
        up: useMediaQuery(theme.breakpoints.up(start)),
        down: useMediaQuery(theme.breakpoints.down(start)),
        between: useMediaQuery(theme.breakpoints.between(start, end)),
        only: useMediaQuery(theme.breakpoints.only(start)),
    };

    return mediaQueries[query] || mediaQueries.only;

}