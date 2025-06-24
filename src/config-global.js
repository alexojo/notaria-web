import { paths } from './routes/paths';
import packageJson from '../package.json';

// ----------------------------------------

export const CONFIG = {

    appName: 'Momentum AG',
    appVersion: packageJson.version,
    

    auth :{
        skip: false,
        redirectPath: paths.dashboard.root,
    },

}