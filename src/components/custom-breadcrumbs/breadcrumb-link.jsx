import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from '../../routes/components/router-link';

// ----------------------------------------------------------------------

export default function BreadcrumbLink({ link, activeLast, disabled }) {

    const linkStyles = {
        typography: 'body2',
        alignItems: 'center',
        color: 'text.primary',
        display: 'inline-flex',

        ...(disabled && !activeLast && {
            cursor: 'default',
            pointerEvents: 'none',
            color: 'text.disabled',
        }),
    };

    // Render Link
    const content = (
        <>
            {link.icon && (
                <Box
                    component="span"
                    sx={{
                        mr: 1,
                        display: 'inherit',
                        '& svg, & img': {
                            height: 20,
                            width: 20,
                        },
                    }}
                >
                    {link.icon}
                </Box>
            )}
            {link.name}
        </>
    );

    // Validate Link href 
    return link.href ? (
        <Link component={RouterLink} href={link.href} sx={linkStyles}>
            {content}
        </Link>
    ) : (
        <Box sx={linkStyles}>{content}</Box>
    );
}

BreadcrumbLink.propTypes = {
    activeLast: PropTypes.bool,
    disabled: PropTypes.bool,
    link: PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.node,
        name: PropTypes.string,
    }),
};
