import { alpha } from '@mui/material/styles';
import { paginationItemClasses } from '@mui/material/PaginationItem';

// ----------------------------------------------------------------------

const PAGINATION_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export function pagination(theme) {
    
    const isLightMode = theme.palette.mode === 'light';

    const generatePaginationStyles = (state) => {
        
        const isDefaultColor = state.color === 'standard';
        const isFilled = state.variant === 'text';
        const isOutlined = state.variant === 'outlined';
        const isSoft = state.variant === 'soft';

        const baseStyles = {
            [`& .${paginationItemClasses.root}`]: {
                ...(isOutlined && {
                    borderColor: alpha(theme.palette.grey[500], 0.24),
                }),
                [`&.${paginationItemClasses.selected}`]: {
                    fontWeight: theme.typography.fontWeightSemiBold,
                    ...(isOutlined && {
                        borderColor: 'currentColor',
                    }),
                    ...(isDefaultColor && {
                        backgroundColor: alpha(theme.palette.grey[500], 0.08),
                        ...(isFilled && {
                            color: isLightMode ? theme.palette.common.white : theme.palette.grey[800],
                            backgroundColor: theme.palette.text.primary,
                            '&:hover': {
                                backgroundColor: isLightMode ? theme.palette.grey[700] : theme.palette.grey[100],
                            },
                        }),
                    }),
                },
            },
        };

        const colorVariants = PAGINATION_COLORS.map((color) => ({
            ...(state.color === color && {
                [`& .${paginationItemClasses.root}`]: {
                    [`&.${paginationItemClasses.selected}`]: {
                        ...(state.color === color && {
                            // SOFT
                            ...(isSoft && {
                                color: theme.palette[color][isLightMode ? 'dark' : 'light'],
                                backgroundColor: alpha(theme.palette[color].main, 0.08),
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette[color].main, 0.16),
                                },
                            }),
                        }),
                    },
                },
            }),
        }));

        return [baseStyles, ...colorVariants];
    };

    return {
        MuiPagination: {
            styleOverrides: {
                root: ({ ownerState }) => generatePaginationStyles(ownerState),
            },
        },
    };
}
