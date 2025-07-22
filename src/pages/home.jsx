import { Helmet } from 'react-helmet-async';

import { HomeView } from '../sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
    title: 'Notaria Venero Tapia',
    description: 'En nuestra notaría, el cliente es nuestra prioridad. Ofrecemos atención personalizada, orientación en quechua y español, y asesoría sencilla para que todos puedan entender sus derechos y obligaciones. Nos esforzamos por mantener una comunicación cercana y empática, adaptando nuestros servicios a las necesidades específicas de cada persona.',
};

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Helmet>

            <HomeView />
        </>
    );
}
