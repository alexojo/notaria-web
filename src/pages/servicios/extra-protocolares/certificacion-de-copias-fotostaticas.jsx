import { Helmet } from 'react-helmet-async';

import { CertificacionCopiasFotostaticasView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function CertificacionCopiasFotostaticasPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Certificación de Copias Fotostáticas </title>
      </Helmet>

      <CertificacionCopiasFotostaticasView />
    </>
  );
}
