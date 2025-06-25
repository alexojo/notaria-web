import { motion } from 'framer-motion';

import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Stack, Divider, MenuItem, IconButton, Typography } from '@mui/material';

import { varHover } from '../animations';
import { paths } from '../../routes/paths';
import { useRouter } from '../../routes/hooks/use-router';
import CustomPopover, { usePopover } from '../custom-popover';


// ----------------------------------------------------------------------

const ITEMS = [
    {
        label: 'Profile',
        linkTo: '',
    },
    {
        label: 'Settings',
        linkTo: '',
    }
];

// ----------------------------------------------------------------------

export function ProfilePopover() {

    const theme = useTheme();

    const popover = usePopover();

    const router = useRouter();

    return (

        <>
            <IconButton
                component={motion.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.08)}
                onClick={popover.onOpen}
                sx={{
                    width: 40,
                    height: 40,
                    background: alpha(theme.palette.background.avatar, 0.8),
                }}
            >
                <Avatar
                    src="assets/SAM_BRIGHT.png"
                    alt="A"
                    sx={{
                        width: 36,
                        height: 36,
                        border: `solid 2px ${theme.palette.background.default}`,
                        background: theme.palette.background.avatar,
                    }}
                >
                    S
                </Avatar>
            </IconButton>


            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 180, p: 0 }}>

                <Box sx={{ p: 1.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        Sam Bright
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        sbright@momentum.ag
                    </Typography>
                </Box>

                <Divider />

                <Stack
                    sx={{
                        px: 1,
                        pt: 1,
                    }}>

                    {ITEMS.map((option) => (
                        <MenuItem key={option.label} >
                            {option.label}
                        </MenuItem>
                    ))}

                </Stack>

                <MenuItem
                    sx={{
                        mx: 1,
                        mb: 1,
                        fontWeight: 'font_WeightBold',
                        color: 'error.main'
                    }}
                    onClick={() => router.push(paths.auth.signIn)}
                >
                    Logout
                </MenuItem>

            </CustomPopover>
        </>
    );
}