import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { bgBlur } from 'src/theme/css';

import { useSettingsContext } from 'src/components/settings';

import { NAV, HEADER } from '../config';
import IconWrapper from '../../components/iconwrapper/iconwrapper';
import { useResponsiveMedia } from '../../hooks/use-responsive-media';
import { RoleInfo, ThemeButton, ProfilePopover, NotificationsPopover } from '../../components/header';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {

    const theme = useTheme();

    const settings = useSettingsContext();

    const isLargeScreen = useResponsiveMedia('up', 'lg');

    const renderContent = (
        <>

            {!isLargeScreen && (

                <IconButton
                    onClick={onOpenNav}
                    whiletap="tap"
                    whilehover="hover"
                    aria-label="navigation"
                    sx={{
                        width: 40,
                        height: 40,
                        mr: 1,
                    }}
                >
                    <IconWrapper icon="solar:hamburger-menu-broken" width={28} sx={{ color: theme.palette.text.secondary }} />
                </IconButton>
            )}

            <RoleInfo themeMode={ settings.themeMode } />

            <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={{ xs: 0.5, sm: 1 }}
            >

                <NotificationsPopover />

                <ThemeButton />

                <ProfilePopover />
                
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                height: HEADER.HEIGHT_DESKTOP,
                zIndex: theme.zIndex.appBar + 1,
                borderBottom: `2px solid ${theme.palette.divider}`,
                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                ...(isLargeScreen && {
                    width: `calc(100% - ${ NAV.WIDTH_VERTICAL }px)`,
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 4 },
                }}
            >

                {renderContent}

            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};
