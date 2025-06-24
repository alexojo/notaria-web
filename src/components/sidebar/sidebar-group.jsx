import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import ListSubheader from '@mui/material/ListSubheader';

import SidebarList from './sidebar-list';

// ----------------------------------------------------------------------

export function SideBarGroup({ subheader, items, slotProps }) {
    return (
        <Stack sx={{ px: 1.5 }}>
            {subheader && (
                <ListSubheader
                    disableGutters
                    disableSticky
                    sx={{
                        fontSize: 12,
                        cursor: 'default',
                        typography: 'overline',
                        display: 'inline-flex',
                        color: 'grey.400',
                        mb: `${slotProps?.gap || 4}px`,
                        p: (theme) => theme.spacing(2, 1, 1, 1.5),
                        userSelect: 'none', // To prevent text selection
                    }}
                >
                    {subheader}
                </ListSubheader>
            )}

            {items.map((item) => (
                <SidebarList key={item.title} data={item} depth={1} slotProps={slotProps} />
            ))}
        </Stack>
    );
}

SideBarGroup.propTypes = {
    items: PropTypes.array.isRequired,
    subheader: PropTypes.string,
    slotProps: PropTypes.object,
};
