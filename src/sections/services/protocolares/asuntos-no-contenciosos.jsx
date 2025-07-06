import { useState } from 'react';
import { m } from 'framer-motion';

import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { varFade } from 'src/components/animate';

import ComponentHero from "../component-hero";
import ComponentBlock from '../component-block';
import IconWrapper from '../../../components/iconwrapper/iconwrapper';
import {
    RequisitosUnionDeHecho,
    RequisitosAdopcionCapaces,
    RequisitosSucesionIntestada,
    RequisitosPatrimonioFamiliar,
    RequisitosDivorcioMutuoAcuerdo,
    RequisitosRectificacionPartidas,
    RequisitosDesalojoConIntervencionNotarial,
} from '../carousel-content-protocolares';


// ---------------------------------------------


export default function AsuntosNoContenciososView() {

    const [controlled, setControlled] = useState(false);

    const handleChangeControlled = (panel) => (event, isExpanded) => {
        setControlled(isExpanded ? panel : false);
    };

    const _accordions = [
        {
            id: "requisitos-sucesion-intestada",
            titulo: "Sucesión Intestada",
            contenido: <RequisitosSucesionIntestada />
        },
        {
            id: "requisitos-rectificacion-partidas",
            titulo: "Rectificación de Partidas",
            contenido: <RequisitosRectificacionPartidas />
        },
        {
            id: "requisitos-constitucion-patrimonio-familiar",
            titulo: "Constitución de Patrimonio Familiar",
            contenido: <RequisitosPatrimonioFamiliar />
        },
        {
            id: "requisitos-divorcio-notarial-mutuo-acuerdo",
            titulo: "Divorcio Notarial por Mutuo Acuerdo",
            contenido: <RequisitosDivorcioMutuoAcuerdo />
        },
        {
            id: "requisitos-adopcion-personas-capaces",
            titulo: "Adopción de Personas Capaces",
            contenido: <RequisitosAdopcionCapaces />
        },
        {
            id: "requisitos-union-hecho",
            titulo: "Unión de Hecho",
            contenido: <RequisitosUnionDeHecho />
        },
        {
            id: "requisitos-desalojo-intervencion-notarial",
            titulo: "Desalojo con Intervención Notarial",
            contenido: <RequisitosDesalojoConIntervencionNotarial />
        }

    ]


    return (
        <>
            <ComponentHero
                title="Asuntos No Contenciosos"
                subtitle="Trámites legales que no requieren un proceso judicial, realizados ante notario con seguridad y eficacia."
            />

            <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={varFade().inRight}
            >
                <Container sx={{ py: 10 }}>
                    <ComponentBlock spacing={0}>
                        {_accordions.map((item, index) => (
                            <Accordion
                                key={item.id}
                                expanded={controlled === item.id}
                                onChange={handleChangeControlled(item.id)}
                                sx={{ width: '100%' }}
                            >
                                <AccordionSummary
                                    expandIcon={<IconWrapper icon="eva:arrow-ios-downward-fill" />}
                                >
                                    <Typography variant="subtitle1">{item.titulo}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Divider sx={{ mb: 2, backgroundColor: 'divider' }} />
                                    {item.contenido ? item.contenido : <Typography variant="body1">No hay información disponible.</Typography>}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </ComponentBlock>

                </Container>
            </m.div>
        </>
    );
}