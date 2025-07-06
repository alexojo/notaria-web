import { Helmet } from 'react-helmet-async';

import { CertificadoDomiciliarioView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificadoDomiciliarioPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificado Domiciliario </title>
      </Helmet>

      <CertificadoDomiciliarioView />
    </>
  );
}
