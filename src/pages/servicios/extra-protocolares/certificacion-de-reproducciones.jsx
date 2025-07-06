import { Helmet } from 'react-helmet-async';

import { CertificacionReproduccionesView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificacionReproduccionesPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificación de Reproducciones </title>
      </Helmet>

      <CertificacionReproduccionesView />
    </>
  );
}
