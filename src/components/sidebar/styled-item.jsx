import { alpha, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

// ----------------------------------------------------------------------------

const StyledItem = styled(
    
    ListItemButton, 
    { shouldForwardProp: (prop) => prop !== 'active', })
    
    (({ active, open, depth, theme }) => {
        
        const isSubItem = depth !== 1;
        const isOpened = open && !active;
        const isDeepSubItem = Number(depth) > 2;

        const commonStyles = {
            borderRadius: 8,
            color: theme.palette.grey[500],
            padding: theme.spacing(0.5, 1, 0.5, 1.5),
            marginBottom: 4,
        };

        const activeStyles = {
            backgroundColor: alpha(theme.palette.secondary.main, 0.16),
            color: theme.palette.secondary.main,
            '&:hover': { backgroundColor: alpha(theme.palette.secondary.main, 0.32) },
        };

        const iconStyles = {
            flexShrink: 0,
            height: 24,
            marginRight: theme.spacing(2),
            width: 24,
        };

        const labelStyles = {
            ...theme.typography.body2,
            display: 'block',
            fontWeight: theme.typography[active ? 'font_WeightSemiBold' : 'font_WeightMedium'],
            overflow: 'hidden',
            maxWidth: '100%',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            width: '100%',
        };

        return {
            ...(isSubItem
                ? {
                    ...commonStyles,

                    minHeight: 40,
                    '& .sub-icon': { ...iconStyles, display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    '& .label': labelStyles,
                    '& .caption': {
                        ...labelStyles,
                        ...theme.typography.caption,
                        color: theme.palette.text.disabled,
                    },
                    ...(active && {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.12),
                        color: theme.palette.common.white,
                        '&:hover': { backgroundColor: alpha(theme.palette.secondary.main, 0.24) },
                    }),
                }
                : {
                    ...commonStyles,
                    minHeight: 44,
                    '& .icon': iconStyles,
                    '& .sub-icon': { display: 'none' },
                    '& .label': labelStyles,
                    
                    ...(active ? activeStyles : {}),
                    ...(isOpened && {
                        backgroundColor: theme.palette.action.hover,
                        color: theme.palette.common.white,
                    }),
                }),

            ...(isDeepSubItem && { paddingLeft: `${theme.spacing(Number(depth))} !important` }),
        };
});

export default StyledItem;