import { Helmet } from 'react-helmet-async';

import { EscriturasPublicasView } from '../../../sections/services/protocolares';
// ----------------------------------------------------------------------

export default function EscriturasPublicasPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Escrituras Publicas </title>
      </Helmet>

      <EscriturasPublicasView />
    </>
  );
}
