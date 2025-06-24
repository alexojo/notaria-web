import 'src/global.css'

import { LocalizationProvider } from 'src/locales'

import ThemeProvider from './theme'
import { Router } from './routes/sections'
import { SettingsProvider } from './components/settings/context'    

// -----------------------------------------------------------------------

export default function App() {

    return (
        
        <LocalizationProvider>

            <SettingsProvider
                defaultSettings={{
                    themeMode: 'light',
                    themeColor: 'default',
                }}
            >

                <ThemeProvider>

                    <Router />

                </ThemeProvider>

            </SettingsProvider>
        </LocalizationProvider>
        
    )
}

