import { Helmet } from 'react-helmet-async';

import { TestamentosView } from '../../../sections/services/protocolares';

// ----------------------------------------------------------------------

export default function TestamentosPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Testamentos </title>
      </Helmet>

      <TestamentosView />
    </>
  );
}
