import { Helmet } from 'react-helmet-async';

import { TransferenciasVehicularesView } from '../../../sections/services/protocolares';

// ----------------------------------------------------------------------

export default function TransferenciasVehicularesPage() {
  return (
    <>
      <Helmet>
        <title> Servicios : Transferencias Vehiculares </title>
      </Helmet>

      <TransferenciasVehicularesView />
    </>
  );
}
