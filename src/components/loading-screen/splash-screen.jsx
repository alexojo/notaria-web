import { m } from 'framer-motion';

import { Box } from '@mui/material';

import { varFade, MotionContainer } from 'src/components/animate';

export function SplashScreen() {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                bgcolor: (theme) => theme.palette.error.darker,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            component={MotionContainer}
        >
            <TextAnimate
                text="Notaría Venero Tapia"
                variants={varFade().inRight}
                sx={{ color: 'white', textAlign: 'center' }}
            />
        </Box>
    );
}

function TextAnimate({ text, variants, sx, ...other }) {
    return (
        <Box
            component={m.div}
            sx={{
                display: 'inline-block',
                typography: 'h1',
                ...sx,
            }}
            {...other}
        >
            {text.split('').map((letter, index) => (
                <m.span
                    key={index}
                    initial={{ opacity: 0, x: 10 }} // movimiento más sutil
                    animate={{ opacity: [0.3, 1, 0.3], x: [10, 0, 10] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: index * 0.1,
                    }}
                    style={{ display: 'inline-block' }}
                >
                    {letter}
                </m.span>
            ))}
        </Box>
    );
}
