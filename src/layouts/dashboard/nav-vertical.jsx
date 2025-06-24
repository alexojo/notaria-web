import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import Scrollbar from 'src/components/scrollbar';

import { NAV } from '../config';
import Sidebar from '../../components/sidebar';
import { useNavData } from './config-navigation';
import { LogoSidebar } from '../../components/logo';
import { useResponsiveMedia } from '../../hooks/use-responsive-media';

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {

    const theme = useTheme();
    const currentPath = usePathname();
    const isLargeScreen = useResponsiveMedia('up', 'lg');

    const sidebarData = useNavData();

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath]);

    const renderSidebarContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >

            <LogoSidebar sx={{ mt: 3, ml: 3, mb: 2, height: 48, width: 146 }} />
            <Sidebar data={sidebarData} />

        </Scrollbar>
    );
    
    return (
        <Box
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.WIDTH_VERTICAL },
            }}
        >
            {isLargeScreen ? 
            
            (
                <Stack 
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: NAV.WIDTH_VERTICAL,
                        bgcolor: theme.palette.background.sidebar,
                        transition: theme.transitions.create(['width'], {
                            easing: 'linear',
                            duration: '200ms',
                        }),
                    }}
                >
                    {renderSidebarContent}

                </Stack>
            ) : 
            (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}

                    sx={{
                        '& .MuiDrawer-paper': {
                            width: NAV.WIDTH_VERTICAL,
                            backgroundColor: theme.palette.background.sidebar,
                        },
                    }}
                >
                    {renderSidebarContent}
                </Drawer>
            )}
        </Box>
    );
}

NavVertical.propTypes = {
    openNav: PropTypes.bool,
    onCloseNav: PropTypes.func,
};
