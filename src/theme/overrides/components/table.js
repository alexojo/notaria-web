import { alpha } from '@mui/material/styles';
import { tableRowClasses } from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';

// ----------------------------------------------------------------------

export function table(theme) {
    
    const generateTableRowStyles = {
        root: {
            [`&.${tableRowClasses.selected}`]: {
                backgroundColor: alpha(theme.palette.primary.dark, 0.04),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.dark, 0.08),
                },
            },
            '&:last-of-type': {
                [`& .${tableCellClasses.root}`]: {
                    borderColor: 'transparent',
                },
            },
        },
    };

    const generateTableCellStyles = {
        root: {
            borderBottomStyle: 'dashed',
        },
        head: {
            fontSize: 14,
            color: theme.palette.text.secondary,
            fontWeight: theme.typography.fontWeightSemiBold,
            backgroundColor: theme.palette.background.neutral,
        },
        stickyHeader: {
            backgroundColor: theme.palette.background.paper,
            backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
        },
        paddingCheckbox: {
            paddingLeft: theme.spacing(1),
        },
    };

    const generateTablePaginationStyles = {
        root: {
            width: '100%',
        },
        toolbar: {
            height: 64,
        },
        actions: {
            marginRight: 8,
        },
        select: {
            paddingLeft: 8,
            '&:focus': {
                borderRadius: theme.shape.borderRadius,
            },
        },
        selectIcon: {
            right: 4,
            width: 16,
            height: 16,
            top: 'calc(50% - 8px)',
        },
    };

    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    position: 'relative',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: generateTableRowStyles,
        },
        MuiTableCell: {
            styleOverrides: generateTableCellStyles,
        },
        MuiTablePagination: {
            styleOverrides: generateTablePaginationStyles,
        },
    };
}
