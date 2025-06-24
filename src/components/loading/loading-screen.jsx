import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

import Logo from '../logo';

// ----------------------------------------------------------------------

export default function LoadingScreen({ ...props }) {

    const animationProps = {
        transition: {
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
        },
    };

    const borderStyle = (theme, size) =>
        `solid ${size}px ${alpha(
            theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            0.3
        )}`;

    return (
        <Box
            sx={{
                right: 0,
                width: 1,
                bottom: 0,
                height: 1,
                zIndex: 1000,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
            }}
            {...props}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1.1, 1.3, 1],
                    opacity: [1, 0.8, 0.8, 1, 1],
                }}
                {...animationProps}
            >
                <Logo disabledLink sx={{ width: 80, height: 80 }} />
            </motion.div>

            {[120, 160].map((size, index) => (
                <Box
                    key={size}
                    component={motion.div}
                    animate={{
                        scale: index === 0 ? [1.4, 1.2, 1.4, 1.6, 1.4] : [1, 1.3, 1.1, 1.3, 1],
                        rotate: [0, 180, 180, 0, 0],
                        opacity: index === 0 ? [0.3, 0.5, 0.8, 1, 0.3] : [1, 0.3, 0.3, 0.6, 1],
                        borderRadius: ['50%', '50%', '100%', '100%', '50%'],
                    }}
                    transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
                    sx={{
                        width: size,
                        height: size,
                        position: 'absolute',
                        border: (theme) => borderStyle(theme, index === 0 ? 4 : 6),
                    }}
                />
            ))}
        </Box>
    );
}
