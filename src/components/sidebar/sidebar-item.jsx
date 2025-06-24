import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import { RouterLink } from 'src/routes/components';

import StyledItem from './styled-item';
import IconWrapper from '../iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

const SideBarItem = forwardRef(
    (
        {
            title,
            path,
            icon,
            info,
            disabled,
            caption,
            roles,
            open,
            depth,
            active,
            hasChild,
            currentRole = 'admin',
            ...other
        },
        ref
    ) => {
        const isSubItem = depth !== 1;

        // Render content with conditional icon based on depth
        const content = (

            <StyledItem
                ref={ref}
                disableGutters
                open={open}
                depth={depth}
                active={active}
                disabled={disabled}
                {...other}
            >
                <Box component="span" className={isSubItem ? 'sub-icon' : 'icon'}>
                    {isSubItem ? (
                        <IconWrapper
                            width={24}
                            height={24}
                            icon="fluent:arrow-turn-down-right-20-filled"
                        />
                    ) : (
                        icon
                    )}
                </Box>

                <Box component="span" sx={{ flex: '1 1 auto', minWidth: 0 }}>
                    <Box component="span" className="label">
                        {title}
                    </Box>

                    {caption && (
                        <Tooltip title={caption} placement="top-start">
                            <Box component="span" className="caption">
                                {caption}
                            </Box>
                        </Tooltip>
                    )}
                </Box>

                {info && <Box component="span" className="info">{info}</Box>}

                {hasChild && (
                    <IconWrapper
                        width={16}
                        className="arrow"
                        icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
                    />
                )}
            </StyledItem>
        );

        // Hide item if the current role is not allowed
        if (roles && !roles.includes(currentRole)) {
            return null;
        }

        // Render the component based on the type of link
        if (hasChild) return content;

        return (
            <Link
                component={RouterLink}
                href={path}
                color="inherit"
                underline="none"
                sx={disabled && { cursor: 'default' }}
            >
                {content}
            </Link>
        );
    }
);

SideBarItem.propTypes = {
    open: PropTypes.bool,
    active: PropTypes.bool,
    path: PropTypes.string,
    depth: PropTypes.number,
    icon: PropTypes.element,
    info: PropTypes.element,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    hasChild: PropTypes.bool,
    caption: PropTypes.string,
    currentRole: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
};

export default SideBarItem;
