import { Helmet } from 'react-helmet-async';

import { AsuntosNoContenciososView } from '../../../sections/services/protocolares';

// ----------------------------------------------------------------------

export default function AsuntosNoContenciososPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Asuntos No Contenciosos </title>
      </Helmet>

      <AsuntosNoContenciososView />
    </>
  );
}
