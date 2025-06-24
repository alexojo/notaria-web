import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import LinkItem from './breadcrumb-link';
import { IconSeparator } from './icon-separator';

// ----------------------------------------------------------------------

export function CustomBreadcrumb({
    links,
    action,
    title,
    moreLink,
    activeLast,
    sx,
    ...other
}) {
    const isLast = (link) => link.name === links[links.length - 1].name;

    return (
        <Box sx={{ ...sx }}>
            <Stack direction="row" alignItems="center">
                <Box sx={{ flexGrow: 1 }}>

                    {/* TITLE */}
                    {title && (
                        <Typography variant="h4" gutterBottom>
                            {title}
                        </Typography>
                    )}

                    {/* BREADCRUMBS - LINK */}
                    {links.length > 0 && (

                        <Breadcrumbs separator={<IconSeparator />} {...other}>

                            {links.map((link) => (
                                <LinkItem
                                    key={link.name || ''}
                                    activeLast={activeLast}
                                    disabled={isLast(link)}
                                    link={link}
                                />
                            ))}

                        </Breadcrumbs>
                    )}
                </Box>

                {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
            </Stack>

            {/* MORE LINK */}
            {moreLink?.length > 0 && (

                <Box sx={{ mt: 2 }}>
                    {moreLink.map((href) => (
                        <Link
                            key={href}
                            href={href}
                            variant="body2"
                            rel="noopener"
                            target="_blank"
                            sx={{ display: 'table' }}
                        >
                            {href}
                        </Link>
                    ))}
                </Box>
            )}
        </Box>
    );
}

CustomBreadcrumb.propTypes = {
    sx: PropTypes.object,
    action: PropTypes.node,
    links: PropTypes.array,
    heading: PropTypes.string,
    moreLink: PropTypes.array,
    activeLast: PropTypes.bool,
};
