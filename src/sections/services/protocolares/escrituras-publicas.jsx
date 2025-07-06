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
    RequisitosGenerales,
    RequisitosEspecialesDonacion,
    RequisitosConstitucionHipoteca,
    RequisitosEspecialesCompraVenta,
    RequisitosLevantamientoHipoteca,
    RequisitosAumentoCapitalSociedades,
    RequisitosLevantamientoInmovilizacion,
    RequisitosEspecialesOtorgamientoPoderes,
    RequisitosEspecialesConstitucionEmpresas,
    RequisitosInmovilizacionTemporalInmueble,
    RequisitosEspecialesConstitucionSociedades,
} from '../carousel-content-protocolares';

// ---------------------------------------------


export default function EscriturasPublicasView() {

    const [controlled, setControlled] = useState(false);

    const handleChangeControlled = (panel) => (event, isExpanded) => {
        setControlled(isExpanded ? panel : false);
    };

    const _accordions = [
        {
            id: "requisitos-generales",
            titulo: "Requisitos Generales",
            contenido: <RequisitosGenerales />
        },
        {
            id: "requisitos-especiales-compra-venta",
            titulo: "Requisitos Especiales: Compra Venta",
            contenido: <RequisitosEspecialesCompraVenta />
        },
        {
            id: "requisitos-especiales-donacion",
            titulo: "Requisitos Especiales: Donación / Anticipo de Legítima",
            contenido: <RequisitosEspecialesDonacion />

        },
        {
            id: "requisitos-especiales-otorgamiento-poderes",
            titulo: "Requisitos Especiales: Otorgamiento de Poderes",
            contenido: <RequisitosEspecialesOtorgamientoPoderes />
        },
        {
            id: "requisitos-especiales-constitucion-empresas",
            titulo: "Requisitos Especiales: Constitución de Empresas",
            contenido: <RequisitosEspecialesConstitucionEmpresas />
        },
        {
            id: "requisitos-especiales-constitucion-sociedades",
            titulo: "Requisitos Especiales: Constitución de Sociedades",
            contenido: <RequisitosEspecialesConstitucionSociedades />
        },
        {
            id: "requisitos-especiales-aumento-capital-sociedades",
            titulo: "Requisitos Especiales: Aumento de Capital en Sociedades",
            contenido: <RequisitosAumentoCapitalSociedades />
        },
        {
            id: "requisitos-especiales-constitucion-hipoteca",
            titulo: "Requisitos Especiales: Constitución de Hipoteca",
            contenido: <RequisitosConstitucionHipoteca />
        },
        {
            id: "requisitos-especiales-levatamiento-hipoteca",
            titulo: "Requisitos Especiales: Levantamiento de Hipoteca",
            contenido: <RequisitosLevantamientoHipoteca />
        },
        {
            id: "requisitos-especiales-inmovilizacion-temporal-inmueble",
            titulo: "Requisitos Especiales: Inmovilización Temporal de Inmueble",
            contenido: <RequisitosInmovilizacionTemporalInmueble />
        },
        {
            id: "requisitos-especiales-levantamiento-inmovilizacion-temporal-inmueble",
            titulo: "Requisitos Especiales: Levantamiento de Inmovilización Temporal de Inmueble",
            contenido: <RequisitosLevantamientoInmovilizacion />
        }

    ]


    return (
        <>
            <ComponentHero
                title="Escrituras Públicas"
                subtitle="Para la elevación a Escritura Pública existen requisitos generales (aplicables a todos los actos o contratos) y otros especiales, que corresponden sólo a algunos actos o contratos."
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