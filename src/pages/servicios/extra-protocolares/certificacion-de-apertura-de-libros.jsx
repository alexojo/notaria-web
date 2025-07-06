import { Helmet } from 'react-helmet-async';

import { CertificacionAperturaLibrosView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificacionAperturaLibrosPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificación de Apertura de Libros </title>
      </Helmet>

      <CertificacionAperturaLibrosView />
    </>
  );
}
