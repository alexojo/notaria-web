import { motion } from 'framer-motion';

import { Tooltip, IconButton } from '@mui/material';

import { varHover } from '../animations';
import { useSettingsContext } from '../settings';
import IconWrapper from '../iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

export function ThemeButton() {

    const settings = useSettingsContext();

    const updateTheme = () => {
        settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light');
    };

    return (
        
        
        <Tooltip title="Toggle light/dark theme" placement="bottom">
            <IconButton
                    component={motion.button}
                    whileTap="tap"
                    whileHover="hover"
                    variants={varHover(1.08)}
                    aria-label="notifications"
                    onClick={updateTheme}      
                >
                    
                    <IconWrapper 
                        icon= {`solar:${settings.themeMode === 'light' ? 'sun-fog-bold-duotone' : 'moon-fog-bold-duotone'}`}
                        width={24} 
                    />
                    
            </IconButton>
        </Tooltip>

        
    );
}