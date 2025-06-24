import { paths } from 'src/routes/paths';

import Label from '../../components/label';
import IconWrapper from '../../components/iconwrapper/iconwrapper';

// ----------------------------------------------------------------------

const icon = (icon_name) => (
    <IconWrapper icon={icon_name} width={24} height={24} sx={{ mr: 1.5 }} />
);

const ICONS = {

    home: icon('solar:home-2-bold-duotone'),
    customers: icon('solar:users-group-rounded-bold-duotone'),
    commission: icon('solar:money-bag-bold-duotone'),
    settings: icon('mdi:cog'),
    policies: icon('solar:shield-check-bold-duotone'),
    logout: icon('mdi:logout'),

};

// ----------------------------------------------------------------------

export function useNavData() {

    const data = [
        {
            subheader: 'principal',
            items: [
                {
                    title: 'Home',
                    path: paths.dashboard.root,
                    icon: ICONS.home,
                },
                {
                    title: 'Policies',
                    path: paths.dashboard.policies,
                    icon: ICONS.policies,
                    info: <Label color="error" variant="inverted">+10</Label>,
                },
                {
                    title: 'Customers',
                    path: paths.dashboard.customers.root,
                    icon: ICONS.customers,
                    children:[
                        { title: 'General', path: paths.dashboard.customers.root },
                        { title: 'List', path: paths.dashboard.customers.list },
                        { title: 'Details', path: paths.dashboard.customers.details },
                    ],
                },
                {
                    title: 'Commission',
                    path: paths.dashboard.commission,
                    icon: ICONS.commission,
                }
            ]

        }
    ];

    return data;
}



