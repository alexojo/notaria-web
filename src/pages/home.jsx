import { Helmet } from 'react-helmet-async';

import { HomeView } from '../sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
    title: 'Notaria Venero Tapia',
    description: 'Atención rápida, segura y personalizada en nuestro local físico.',
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
