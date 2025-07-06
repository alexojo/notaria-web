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


export default function CertificacionAperturaLibrosView() {

    return (
        <>
            <ComponentHero
                title="Certificación de Apertura de Libros"
                subtitle="Conoce los requisitos para certificar la apertura de libros contables o societarios ante notario, conforme a ley."
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
                                Libros Contables:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'Llenar solicitud indicando los Datos del Libro y de la Empresa o persona a la cual pertenecen los libros.',
                                    'Copia del Documento de identidad del presentante.',
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography variant="body1" fontWeight="bold">
                                Libros de Actas:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'Carta de comunicación a la SUNAT.',
                                    'Solicitud firmada por el Representante Legal.',
                                    'Vigencia de Poder.',
                                    'Copia del Documento de Identidad del Presentante.',
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography variant="body1">
                                A partir del Segundo Libro se solicitará adicionalmente, la presentación del Libro anterior debidamente concluido o, de ser el caso, la denuncia respectiva por pérdida o robo.
                            </Typography>
                        </Stack>
                    </ComponentBlock>

                </Container>
            </m.div>

        </>
    );
}