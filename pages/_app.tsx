import { EntriesProvider } from '../context/entries';
import { SnackbarProvider } from 'notistack';

import type { AppProps } from 'next/app';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../themes';
import { UIProvider } from '../context/ui';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}

export default MyApp
