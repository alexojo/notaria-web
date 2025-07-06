import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "../../layouts/main";

const Testamentos = lazy(() => import('src/pages/servicios/protocolares/testamentos'));
const ServicioEscriturasPublicas = lazy(() => import('src/pages/servicios/protocolares/escrituras-publicas'));
const AsuntosNoContenciosos = lazy(() => import('src/pages/servicios/protocolares/asuntos-no-contenciosos'));
const TransferenciasVehiculares = lazy(() => import('src/pages/servicios/protocolares/transferencias-vehiculares'));

const AutorizacionViajeMenores = lazy(() => import('src/pages/servicios/extra-protocolares/autorizacion-de-viaje-de-menores'));
const CertificacionAperturaLibros = lazy(() => import('src/pages/servicios/extra-protocolares/certificacion-de-apertura-de-libros'));
const CertificacionCopiasFotostaticas = lazy(() => import('src/pages/servicios/extra-protocolares/certificacion-de-copias-fotostaticas'));
const CertificacionEntregaCartasNotariales = lazy(() => import('src/pages/servicios/extra-protocolares/certificacion-de-entrega-de-cartas-notariales'));
const CertificacionFirmas = lazy(() => import('src/pages/servicios/extra-protocolares/certificacion-de-firmas'));
const CertificacionReproducciones = lazy(() => import('src/pages/servicios/extra-protocolares/certificacion-de-reproducciones'));
const CertificadoSupervivencia = lazy(() => import('src/pages/servicios/extra-protocolares/certificado-de-supervivencia'));
const CertificadoDomiciliario = lazy(() => import('src/pages/servicios/extra-protocolares/certificado-domiciliario'));


export const serviciosRoutes = [
    {
        path: '/servicios',
        element: (
            <Suspense fallback={<div>Cargando...</div>}>
                <MainLayout>
                    <Outlet />
                </MainLayout>
            </Suspense>
        ),
        children: [

            // Protocolares
            { path: 'testamentos', element: <Testamentos /> },
            { path: 'escrituras-publicas', element: <ServicioEscriturasPublicas /> },
            { path: 'asuntos-no-contenciosos', element: <AsuntosNoContenciosos /> },
            { path: 'transferencia-vehicular', element: <TransferenciasVehiculares /> },

            // Extra-protocolares
            { path: 'certificacion-firmas', element: <CertificacionFirmas /> },
            { path: 'apertura-libros', element: <CertificacionAperturaLibros /> },
            { path: 'copias-fotostaticas', element: <CertificacionCopiasFotostaticas /> },
            { path: 'reproducciones', element: <CertificacionReproducciones /> },
            { path: 'viaje-menores', element: <AutorizacionViajeMenores /> },
            { path: 'supervivencia', element: <CertificadoSupervivencia /> },
            { path: 'cartas-notariales', element: <CertificacionEntregaCartasNotariales /> },
            { path: 'certificado-domiciliario', element: <CertificadoDomiciliario /> },

        ]

    },
]