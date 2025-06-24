import { accordionClasses } from '@mui/material/Accordion';
import { typographyClasses } from '@mui/material/Typography';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

// ----------------------------------------------------------------------

export function accordion(theme) {

    return {
        
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    [`&.${accordionClasses.expanded}`]: {
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: theme.shape.borderRadius,
                        boxShadow: theme.customShadows.z8,
                    },
                    [`&.${accordionClasses.disabled}`]: {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1),
                    [`&.${accordionSummaryClasses.disabled}`]: {
                        color: theme.palette.action.disabled,
                        opacity: 1,
                        [`& .${typographyClasses.root}`]: {
                            color: 'inherit',
                        },
                    },
                },
                expandIconWrapper: {
                    color: 'inherit',
                },
            },
        },
    };

}
