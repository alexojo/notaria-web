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


export default function CertificadoSupervivenciaView() {

    return (
        <>
            <ComponentHero
                title="Certificado de Supervivencia"
                subtitle="Documento notarial que acredita que una persona se encuentra con vida, requerido para trámites legales o administrativos."
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
                                    'Comparecencia del solicitante.',
                                    'Datos generales de ley.',
                                    'Presentar original y copia del documento de identidad vigente (DNI, CIP, Carnet de Extranjería, etc.), el DNI deberá contar con la constancia de votación al día, dispensa o pago de multa. El DNI debe ESTAR VIGENTE. '
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                                        <ListItemText primary={<Typography variant="body1">{item}</Typography>} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography variant="body1" fontWeight="bold">
                                Si fuera incapaz:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'Copia Literal de la inscripción de nombramiento del Curador en Registros Públicos.',
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