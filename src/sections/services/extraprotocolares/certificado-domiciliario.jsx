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


export default function CertificadoDomiciliarioView() {

    return (
        <>
            <ComponentHero
                title="Certificado Domiciliario"
                subtitle="Documento notarial que acredita el domicilio real de una persona para fines legales o administrativos."
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

                            <Typography variant="body1" fontWeight="bold">
                                Requisitos:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'DNI del solicitante (original y copia)',
                                    'Recibos de Luz, Agua o Teléfono que acrediten el domicilio.',
                                    'Trámite es personal.'
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