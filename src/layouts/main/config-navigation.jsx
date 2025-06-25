import { paths } from '../../routes/paths';
import IconWrapper from '../../components/iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Inicio',
    icon: <IconWrapper icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Nosotros',
    icon: <IconWrapper icon="solar:notebook-bold-duotone" />,
    path: paths.nosotros
  },
  {
    title: 'Servicios',
    icon: <IconWrapper icon="solar:atom-bold-duotone" />,
    path: paths.servicios,
  },
];
