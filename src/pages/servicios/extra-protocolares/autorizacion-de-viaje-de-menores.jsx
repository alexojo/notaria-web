import { Helmet } from 'react-helmet-async';

import { AutorizacionViajeMenoresView } from '../../../sections/services/extraprotocolares';

// ----------------------------------------------------------------------

export default function AutorizacionViajeMenoresPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Autorización de Viaje de Menores </title>
      </Helmet>

      <AutorizacionViajeMenoresView />
    </>
  );
}
