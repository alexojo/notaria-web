import { alpha } from '@mui/material/styles';

import { grey, info, error, common, primary, success, warning, secondary } from './palette';

// ----------------------------------------------------------------------

export function customShadows(mode) {

    const baseColor = mode === 'light' ? grey[600] : common.black;
    const transparentShadow = alpha(baseColor, 0.16);

    const levelShadows = {

        z1: `0 1px 2px 0 ${transparentShadow}`,
        z4: `0 4px 8px 0 ${transparentShadow}`,
        z8: `0 8px 16px 0 ${transparentShadow}`,
        z12: `0 12px 24px -4px ${transparentShadow}`,
        z16: `0 16px 32px -4px ${transparentShadow}`,
        z20: `0 20px 40px -4px ${transparentShadow}`,
        z24: `0 24px 48px 0 ${transparentShadow}`,

    };

    const componentShadows = {

        card: `0 0 2px 0 ${alpha(baseColor, 0.2)}, 0 12px 24px -4px ${alpha(baseColor, 0.12)}`,
        dropdown: `0 0 2px 0 ${alpha(baseColor, 0.24)}, -20px 20px 40px -4px ${alpha(baseColor, 0.24)}`,
        dialog: `-40px 40px 80px -8px ${alpha(common.black, 0.24)}`,

    };

    const statusShadows = {
        
        primary: `0 8px 16px 0 ${alpha(primary.main, 0.24)}`,
        info: `0 8px 16px 0 ${alpha(info.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${alpha(secondary.main, 0.24)}`,
        success: `0 8px 16px 0 ${alpha(success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${alpha(warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${alpha(error.main, 0.24)}`,
        
    };

    return {
        ...levelShadows,
        ...componentShadows,
        ...statusShadows,
    };
}
