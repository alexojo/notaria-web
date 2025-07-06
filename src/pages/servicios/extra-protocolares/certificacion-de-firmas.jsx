import { Helmet } from 'react-helmet-async';

import { CertificacionFirmasView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificacionFirmasPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificación de Firmas </title>
      </Helmet>

      <CertificacionFirmasView />
    </>
  );
}
