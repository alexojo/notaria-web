import { Helmet } from 'react-helmet-async';

import { CertificacionEntregaCartasNotarialesView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificacionEntregaCartasNotarialesPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificación de Entrega de Cartas Notariales </title>
      </Helmet>

      <CertificacionEntregaCartasNotarialesView />
    </>
  );
}
