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


export default function TestamentosView() {


    return (
        <>
            <ComponentHero
                title="Testamentos"
                subtitle="Conoce los requisitos para otorgar un testamento de forma legal, segura y con plena validez notarial."
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
                                    'D.N.I. del Testador.',
                                    '2 Testigos mayores de edad (no familiares) con sus respectivos D.N.I.',
                                    'Copia literal y/o testimonios de los inmuebles que pretenda disponer.',
                                    'Tanto el Testador como los testigos, deberán presentar sus D.N.I. vigentes con la última constancia de votación o con la dispensa respectiva.',
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