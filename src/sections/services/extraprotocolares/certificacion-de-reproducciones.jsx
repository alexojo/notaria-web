import { m } from 'framer-motion';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { varFade } from 'src/components/animate';

import ComponentHero from "../component-hero";
import ComponentBlock from '../component-block';

// ---------------------------------------------


export default function CertificacionReproduccionesView() {

    return (
        <>
            <ComponentHero
                title="Certificación de Reproducciones"
                subtitle="El notario certifica que la reproducción presentada coincide fielmente con el documento original."
            />

            <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={varFade().inRight}
            >
                <Container sx={{ py: 10 }}>

                    <ComponentBlock title="Requisitos Generales" spacing={0}>
                        <Stack spacing={2}>
                            <Typography variant="body1">
                                El Notario certificará reproducciones de documentos obtenidos por cualquier medio idóneo, autorizando con su firma que la copia que se le presenta guarda absoluta conformidad con el original. En caso que el documento presente enmendaduras; el Notario, a su criterio, podrá denegar la certificación que se le solicita o expedirla, dejando constancia de la existencia de las mismas.
                            </Typography>

                            <Typography variant="body1" fontWeight="bold">
                                Requisitos:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'Acompañar a la reproducción o fotocopia que se desea certificar, el original del documento.',
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                    </ComponentBlock>

                </Container>
            </m.div>

        </>
    );
}