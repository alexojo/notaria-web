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


export default function CertificacionFirmasView() {

    return (
        <>
            <ComponentHero
                title="Certificación de Firmas"
                subtitle="Valida la autenticidad de tu firma ante notario para darle fuerza legal a tus documentos."
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

                            <List dense sx={{ pl: 2, listStyleType: 'disc' }}>
                                {[
                                    'Comparecencia de la persona cuya firma se desea certificar con su documento oficial de identificación, para que suscriba el documento en el mismo oficio notarial, o de haberlo ya hecho, vuelva a firmarlo e imprima su huella digital.',
                                    'Para el caso de personas incapacitadas físicamente para firmar, otra persona podrá hacerlo a su ruego sin perjuicio que el rogante imprima su huella digital.',
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