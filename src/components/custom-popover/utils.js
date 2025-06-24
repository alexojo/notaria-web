import { alpha, styled } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';

// ----------------------------------------------------------------------

export const CustomArrow = styled('span')(({ arrow, theme }) => {

    const POSITION = -8;

    const commonStyle = {
        width: 16,
        height: 20,
        position: 'absolute',
        borderBottomLeftRadius: 4,
        clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
        border: `solid 1px ${alpha(
            theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
            0.32
        )}`,
        ...bgBlur({ color: theme.palette.background.paper }),
    };

    const positionStyle = {
        
        top: {
            top: POSITION,
            transform: 'rotate(135deg)',
        },
        bottom: {
            bottom: POSITION,
            transform: 'rotate(-45deg)',
        },
        left: {
            left: POSITION,
            transform: 'rotate(45deg)',
        },
        right: {
            right: POSITION,
            transform: 'rotate(-135deg)',
        },
    };

    const alignmentStyles = {
        'top-left': { ...positionStyle.top, left: 20 },
        'top-center': { ...positionStyle.top, left: 0, right: 0, margin: 'auto' },
        'top-right': { ...positionStyle.top, right: 20 },
        'bottom-left': { ...positionStyle.bottom, left: 20 },
        'bottom-center': { ...positionStyle.bottom, left: 0, right: 0, margin: 'auto' },
        'bottom-right': { ...positionStyle.bottom, right: 20 },
        'left-top': { ...positionStyle.left, top: 20 },
        'left-center': { ...positionStyle.left, top: 0, bottom: 0, margin: 'auto' },
        'left-bottom': { ...positionStyle.left, bottom: 20 },
        'right-top': { ...positionStyle.right, top: 20 },
        'right-center': { ...positionStyle.right, top: 0, bottom: 0, margin: 'auto' },
        'right-bottom': { ...positionStyle.right, bottom: 20 },
    };

    return {
        ...commonStyle,
        ...(alignmentStyles[arrow] || {}),
    };
});

// ----------------------------------------------------------------------

export function getPosition(arrow) {
    
    const positions = {
        'top-left': {
            style: { ml: -0.8 },
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            transformOrigin: { vertical: 'top', horizontal: 'left' },
        },
        'top-center': {
            style: {},
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
            transformOrigin: { vertical: 'top', horizontal: 'center' },
        },
        'top-right': {
            style: { ml: 0.8 },
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
            transformOrigin: { vertical: 'top', horizontal: 'right' },
        },
        'bottom-left': {
            style: { ml: -0.8 },
            anchorOrigin: { vertical: 'top', horizontal: 'left' },
            transformOrigin: { vertical: 'bottom', horizontal: 'left' },
        },
        'bottom-center': {
            style: {},
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
            transformOrigin: { vertical: 'bottom', horizontal: 'center' },
        },
        'bottom-right': {
            style: { ml: 0.8 },
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            transformOrigin: { vertical: 'bottom', horizontal: 'right' },
        },
        'left-top': {
            style: { mt: -0.8 },
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            transformOrigin: { vertical: 'top', horizontal: 'left' },
        },
        'left-center': {
            anchorOrigin: { vertical: 'center', horizontal: 'right' },
            transformOrigin: { vertical: 'center', horizontal: 'left' },
        },
        'left-bottom': {
            style: { mt: 0.8 },
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
            transformOrigin: { vertical: 'bottom', horizontal: 'left' },
        },
        'right-top': {
            style: { mt: -0.8 },
            anchorOrigin: { vertical: 'top', horizontal: 'left' },
            transformOrigin: { vertical: 'top', horizontal: 'right' },
        },
        'right-center': {
            anchorOrigin: { vertical: 'center', horizontal: 'left' },
            transformOrigin: { vertical: 'center', horizontal: 'right' },
        },
        'right-bottom': {
            style: { mt: 0.8 },
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            transformOrigin: { vertical: 'bottom', horizontal: 'right' },
        },
    };

    // Return the matching position or default to 'top-right'
    return positions[arrow] || positions['top-right'];
}
