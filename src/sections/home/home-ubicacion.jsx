import { m } from 'framer-motion';

import { alpha } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { varFade, MotionViewport } from 'src/components/animate';

import IconWrapper from '../../components/iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/14%C2%B021\'21.2%22S+71%C2%B010\'13.5%22W/@-14.3558943,-71.1729982,1207m';

export default function HomeUbicacion() {
    const mdUp = useResponsive('up', 'md');

    const renderBtn = (
        <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={GOOGLE_MAPS_URL}
            endIcon={<IconWrapper icon="eva:arrow-ios-forward-fill" />}
        >
            Ver en Google Maps
        </Button>
    );

    const renderDescription = (
        <Stack
            sx={{
                textAlign: {
                    xs: 'center',
                    md: 'left',
                },
            }}
        >
            <m.div variants={varFade().inDown}>
                <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
                    Nuestra Ubicación
                </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
                <Typography
                    variant="h2"
                    sx={{
                        mt: 3,
                        mb: { md: 5 },
                    }}
                >
                    Estamos en Maranganí, Canchis, Cusco
                </Typography>
            </m.div>

            {mdUp && <m.div variants={varFade().inDown}>{renderBtn}</m.div>}
        </Stack>
    );

    return (
        <Container
            component={MotionViewport}
            sx={{
                py: { xs: 10, md: 15 },
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            }}
        >
            <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
                <Grid xs={12} md={4}>
                    {renderDescription}
                </Grid>

                <Grid xs={12} md={7}>
                    <m.div variants={varFade().inUp}>
                        <iframe
                            title="Ubicación Notaría"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1181.2142469791984!2d-71.1704233!3d-14.3558943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDIxJzIxLjIiUyA3McKwMTAnMTMuNSJX!5e1!3m2!1sen!2spe!4v1719258293621!5m2!1sen!2spe"
                            width="100%"
                            height="360"
                            style={{ border: 0, borderRadius: 12 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </m.div>
                </Grid>

                {!mdUp && (
                    <Grid xs={12} sx={{ textAlign: 'center' }}>
                        {renderBtn}
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
