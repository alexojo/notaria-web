import 'src/global.css'

import { LocalizationProvider } from 'src/locales'

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';

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
                    <MotionLazy>
                        <ProgressBar />
                        <Router />
                    </MotionLazy>
                </ThemeProvider>

            </SettingsProvider>
        </LocalizationProvider>

    )
}

