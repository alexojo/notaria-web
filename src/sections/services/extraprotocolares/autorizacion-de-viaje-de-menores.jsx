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


export default function AutorizacionViajeMenoresView() {

    return (
        <>
            <ComponentHero
                title="Autorización de Viajes de Menores"
                subtitle="Trámite notarial que permite a menores de edad viajar al interior o exterior del país con autorización legal de sus padres o tutores."
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
                                Las autorizaciones de viaje al interior y exterior del país se extienden en formulario especial emitido por el Colegio de Notarios.
                            </Typography>

                            <Typography variant="body1" fontWeight="bold">
                                Requisitos:
                            </Typography>

                            <List dense sx={{ pl: 4, listStyleType: 'disc' }}>
                                {[
                                    'Datos con Generales de ley de uno o ambos padres, ya sea que se trate de viajes al interior o al exterior respectivamente.',
                                    'Adjuntar copias de los documentos de identidad (DNI, CIP, Carnet de Extranjería, etc.), el DNI deberá contar con la constancia de votación al día, dispensa o pago de multa. El DNI debe ESTAR VIGENTE.',
                                    'Si el o los padres otorgan poder por escritura pública, a favor de uno de ellos o a un tercero, se solicitara el Certificado de Vigencia de Poder expedido por la oficina registral.',
                                    'Presentar partida de nacimiento del menor.',
                                    'Indicar lugar al cual viaja el menor y, de considerarlo necesario, indicar los datos de la persona que acompañará al menor en el viaje.'
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