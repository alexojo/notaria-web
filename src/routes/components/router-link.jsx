import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterDomLink } from 'react-router-dom';

export const RouterLink = forwardRef(({ href, ...other }, ref) => (

    <RouterDomLink to={href} ref={ref} {...other} />

));


RouterLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node
};