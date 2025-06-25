import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import IconWrapper from '../../components/iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

const CARDS = [
    {
        icon: 'solar:sledgehammer-bold-duotone',
        color: 'success.main',
        title: 'Confianza Jurídica',
        description: 'Procesos transparentes y seguros. Más de 20 años brindando respaldo legal con integridad.',
    },
    {
        icon: 'solar:users-group-rounded-bold-duotone',
        color: 'warning.main',
        title: 'Atención Personalizada',
        description:
            'Nos enfocamos en tus necesidades. Cada trámite es atendido con dedicación y cercanía.',
    },
    {
        icon: 'solar:clock-circle-bold-duotone',
        color: 'error.dark',
        title: 'Eficiencia y Puntualidad',
        description: 'Trámites ágiles, sin demoras innecesarias. Valoramos tu tiempo y lo respetamos.',
    },
];

// ----------------------------------------------------------------------

export default function HomeAcercaDeNosotros() {
    return (
        <Container
            component={MotionViewport}
            sx={{
                textAlign: 'center',
                py: { xs: 10, md: 15 },
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    textAlign: 'center',
                    mb: { xs: 5, md: 10 },
                }}
            >
                <m.div variants={varFade().inUp}>
                    <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
                        Acerca de Nosotros
                    </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                    <Typography variant="h2">
                        ¿Qué nos distingue en <br /> Notaría Venero Tapia?
                    </Typography>
                </m.div>
            </Stack>

            <Box
                gap={{ xs: 3, lg: 10 }}
                display="grid"
                alignItems="center"
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
                sx={{ mb: { xs: 5, md: 10 } }}
            >
                {CARDS.map((card, index) => (
                    <m.div variants={varFade().inUp} key={card.title}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                boxShadow: { md: 'none' },
                                bgcolor: 'background.default',
                                p: (theme) => theme.spacing(10, 5),
                                ...(index === 1 && {
                                    boxShadow: (theme) => ({
                                        md: `-40px 40px 80px ${theme.palette.mode === 'light'
                                            ? alpha(theme.palette.grey[500], 0.16)
                                            : alpha(theme.palette.common.black, 0.4)
                                            }`,
                                    }),
                                }),
                            }}
                        >
                            <IconWrapper
                                icon={card.icon}
                                sx={{
                                    width: 64,
                                    height: 64,
                                    color: card.color,
                                }}
                            />

                            <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                                {card.title}
                            </Typography>

                            <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
                        </Card>
                    </m.div>
                ))}
            </Box>

            <m.div variants={varFade().inUp}>
                <Button
                    color="inherit"
                    size="large"
                    variant="contained"
                >
                    Nuestros Servicios
                </Button>
            </m.div>
        </Container>
    );
}
