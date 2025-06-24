import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { useBoolean } from 'src/hooks/use-boolean';

import Main from './main';
import Header from './header';
import NavVertical from './nav-vertical';


// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {

    const nav = useBoolean();

    const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

    return (
        <>
            <Header onOpenNav={nav.onTrue} />

            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                }}
            >
                {renderNavVertical}

                <Main>{children}</Main>
            </Box>
        </>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.node,
};
