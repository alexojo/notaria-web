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


export default function CertificacionEntregaCartasNotarialesView() {

    return (
        <>
            <ComponentHero
                title="Certificación de Entrega de Cartas Notariales"
                subtitle="El notario certifica la entrega de una carta notarial, dejando constancia de su recepción y contenido."
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
                                El notario cursará las cartas que los interesados soliciten, a la dirección del destinatario dentro de los límites de su jurisdicción dejando constancia de su entrega o de las circunstancias de su diligenciamiento en el duplicado que devolverá a los interesados.
                            </Typography>

                            <Typography variant="body1" fontWeight="bold">
                                Requisitos:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'Presentar debidamente firmada la carta en original y dos copias.',
                                    'Indicar claramente la dirección del destinatario y su nombre o razón social.'
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