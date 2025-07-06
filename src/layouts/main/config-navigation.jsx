import { paths } from '../../routes/paths';
import IconWrapper from '../../components/iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Inicio',
    icon: <IconWrapper icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Nosotros',
    icon: <IconWrapper icon="solar:notebook-bold-duotone" />,
    path: paths.nosotros
  },
  {
    title: 'Servicios',
    icon: <IconWrapper icon="solar:atom-bold-duotone" />,
    path: paths.servicios,
    children: [
      {
        subheader: 'Protocolares',
        items: [
          { title: 'Escritura Públicas', path: paths.serviciosEscriturasPublicas },
          { title: 'Transferencia Vehicular', path: paths.serviciosTransferenciaVehicular },
          { title: 'Asuntos No Contenciosos', path: paths.serviciosAsuntosNoContenciosos },
          { title: 'Testamentos', path: paths.serviciosTestamentos },
        ]
      },
      {
        subheader: 'Extra Protocolares',
        items: [
          { title: 'Certificación de Firmas', path: paths.serviciosCertificacionFirmas },
          { title: 'Certificación de Apertura de Libros', path: paths.serviciosAperturaLibros },
          { title: 'Certificación de Copias Fotostáticas', path: paths.serviciosCopiasFotostaticas },
          { title: 'Certificación de Reproducciones', path: paths.serviciosReproducciones },
          { title: 'Autorización de Viaje de Menores', path: paths.serviciosViajeMenores },
          { title: 'Certificado de Supervivencia', path: paths.serviciosSupervivencia },
          { title: 'Certificación de Cartas Notariales', path: paths.serviciosCartasNotariales },
          { title: 'Certificado Domiciliario', path: paths.serviciosCertificadoDomiciliario },
        ]
      }
    ]
  },
];
