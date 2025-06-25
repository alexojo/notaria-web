
import { Stack } from '@mui/material';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import HomeHero from '../home-hero';
import HomeUbicacion from '../home-ubicacion';
import HomeAcercaDeNosotros from '../home-acerca-de-nosotros';

// ------------------------------------------------------

export function HomeView() {

    const pageProgress = useScrollProgress();

    return (
        <>
            <ScrollProgress
                variant="linear"
                progress={pageProgress.scrollYProgress}
                sx={{ position: 'fixed' }}
            />

            <BackToTop />
        
            <HomeHero />

            <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
                
                <HomeAcercaDeNosotros />

                <HomeUbicacion />

            </Stack>
        </>
    )
}