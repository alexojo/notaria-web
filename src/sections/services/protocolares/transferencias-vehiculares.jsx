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


export default function TransferenciasVehicularesView() {


    return (
        <>
            <ComponentHero
                title="Transferencias Vehiculares"
                subtitle="Conoce los requisitos necesarios para formalizar la transferencia de un vehículo mediante Escritura Pública."
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
                                    'Deberán estar presentes compradores y vendedores conjuntamente.',
                                    'Llenar Hoja de datos con generales de ley de los contratantes e información del vehículo así como precio de venta.',
                                    'Presentar original y copia de los documentos de identidad vigentes de los contratantes. El DNI deberá contar con la constancia de votación al día, dispensa o pago de multa, además de encontrarse vigente.',
                                    'Tratándose de personas jurídicas o personas naturales que representen a otras, deberán acreditar los poderes para celebrar este tipo de contratos con el Certificado de vigencia de poder expedido por la Zona Registral correspondiente. Dicho Certificado no podrá tener una antigüedad mayor a 30 días naturales.',
                                    'Presentar Original y copia de la Tarjeta de Propiedad, en caso la Tarjeta se encuentre deteriorada, presentar Certificado de Gravamen.',
                                    'En caso de vehículo con una antigüedad de inmatriculación (fecha de inscripción a los Registros Públicos) no mayor a 3 años, presentar el debido comprobante que acredite el pago del impuesto al patrimonio vehicular.',
                                    'Presentar original y copia del Seguro Obligatorio de Accidentes de Tránsito (SOAT) vigente.',
                                    'Cuando se trate de un vehículo de propiedad común de los cónyuges, se requiere la intervención de ambos por propio derecho o poder.',
                                    'En caso de primera inscripción, adjuntar DUA, factura emitida por el importador y cláusula con firmas legalizadas del comprador y vendedor manifestando el medio de pago.',
                                    'Se debe acreditar el medio de pago del sistema financiero utilizado. Se debe bancarizar el 100% de la operación.',
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