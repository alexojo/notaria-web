import { Helmet } from 'react-helmet-async';

import ServicesView from '../sections/services/view/services-view';

// ----------------------------------------------------------------------

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title> Servicios </title>
      </Helmet>

      <ServicesView />
    </>
  );
}
