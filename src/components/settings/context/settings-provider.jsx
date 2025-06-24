import { useMemo } from 'react'; 
import PropTypes from 'prop-types';

import { SettingsContext } from './use-settings-context';
import { useLocalStorage } from '../../../hooks/use-local-storage';


// ----------------------------------------------------------------------

const STORAGE_KEY = 'settings'

export function SettingsProvider({ children, defaultSettings }) {

    const { state, update } = useLocalStorage( STORAGE_KEY, defaultSettings );

    const memoizedValue = useMemo(

        () => ({
            ...state,
            onUpdate: update,
        }),        
        [
            update,
            state
        ]
    
    );

    return (
        <SettingsContext.Provider value={memoizedValue}>
            {children}
        </SettingsContext.Provider>
    );
}

SettingsProvider.propTypes = {
    children: PropTypes.node,
    defaultSettings: PropTypes.object,
};