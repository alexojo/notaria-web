import { Helmet } from 'react-helmet-async';

import { CertificadoSupervivenciaView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificadoSupervivenciaPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificado de Supervivencia </title>
      </Helmet>

      <CertificadoSupervivenciaView />
    </>
  );
}
