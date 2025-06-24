import { motion } from 'framer-motion';

import { IconButton } from '@mui/material';

import { varHover } from '../animations';
import CustomPopover from '../custom-popover';
import usePopover from '../../hooks/use-popover';
import IconWrapper from '../iconwrapper/iconwrapper';


// ----------------------------------------------------------------------

export function NotificationsPopover() {

    const popover = usePopover();

    return (
        
        <>
            <IconButton
                component={motion.button}
                whileTap="tap"
                whileHover="hover"
                variants={varHover(1.08)}
                aria-label="notifications"
                color={popover.open ? 'inherit' : 'default'}
                onClick={popover.onOpen}
                sx={{
                    ...(popover.open && {
                        bgcolor: (theme) => theme.palette.action.selected,
                    }),
                }}

                >
                <IconWrapper icon="solar:bell-bold-duotone" width={24} />
            </IconButton>

            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
                <div>
                    
                        <h6>Notifications</h6>
                    
                </div>
            </CustomPopover>
        </>
    );
}