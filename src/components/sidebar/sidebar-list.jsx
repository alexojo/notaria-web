import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import Collapse from '@mui/material/Collapse';

import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import SidebarItem from './sidebar-item';

// ----------------------------------------------------------------------

export default function SidebarList({ data, depth, slotProps }) {
    
    const currentPath = usePathname();
    const isActive = useActiveLink(data.path, Boolean(data.children));

    const [isOpen, setIsOpen] = useState(isActive);

    // Toggle the menu state
    const toggleMenu = useCallback(() => {
        if (data.children) setIsOpen((prev) => !prev);
    }, [data.children]);

    // Close the menu when the path changes and it is no longer active
    useEffect(() => {
        if (!isActive) setIsOpen(false);
    }, [currentPath, isActive]);

    return (
        <>
            <SidebarItem
                open={isOpen}
                onClick={toggleMenu}
                title={data.title}
                path={data.path}
                icon={data.icon}
                info={data.info}
                roles={data.roles}
                caption={data.caption}
                disabled={data.disabled}
                depth={depth}
                hasChild={Boolean(data.children)}
                currentRole={slotProps?.currentRole}
                active={isActive}
                className={isActive ? 'active' : ''}
                sx={{ mb: `${slotProps?.gap}px` }}
            />

            {data.children && (
                <Collapse in={isOpen} unmountOnExit>
                    {data.children.map((item) => (
                        <SidebarList key={item.title} data={item} depth={depth + 1} slotProps={slotProps} />
                    ))}
                </Collapse>
            )}
        </>
    );
}

SidebarList.propTypes = {
    data: PropTypes.object.isRequired,
    depth: PropTypes.number,
    slotProps: PropTypes.object,
};
