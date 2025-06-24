import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import Logo from 'src/components/logo';

import { HEADER } from '../config';
import { ThemeButton } from '../../components/header/theme-button';

// ----------------------------------------------------------------------

export function HeaderSimple() {

    const theme = useTheme();

    return (
        <AppBar>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    height: HEADER.HEIGHT_DESKTOP,
                    zIndex: theme.zIndex.appBar + 1,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    backgroundColor : theme.palette.background.default,
                    
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),

                }}
            >
                <Logo sx={{ height: 32, width: 'auto' }} />

                <Stack direction="row" alignItems="center" spacing={1}>
                    
                    <ThemeButton />
                </Stack>
            </Toolbar>

        </AppBar>
    );
}
