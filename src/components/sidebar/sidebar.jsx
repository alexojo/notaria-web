import { memo } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import { SideBarGroup } from './sidebar-group';

// ----------------------------------------------------------------------

// STRUCTURE SIDEBAR
// SideBar -> SideBarGroup -> SideBarList -> SideBarItem ( StyledItem )

// ----------------------------------------------------------------------

function SideBar({ data, slotProps, ...other }) {

    return (

        <Stack component="nav" id="sidebar" {...other}>

            {data.map(( section, index ) => (

                <SideBarGroup
                    key={index}
                    subheader={section.subheader}
                    items={section.items}
                    slotProps={slotProps}
                />

            ))}

        </Stack>

    );
}

SideBar.propTypes = {
    data: PropTypes.array,
    slotProps: PropTypes.object,
};

export default memo(SideBar);



