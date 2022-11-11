import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ColorScheme, MantineProvider } from '@mantine/core';

import PageLoader from '../components/pageLoader/pageLoader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const colorScheme :ColorScheme = "light";

    useEffect(() => {
      setTimeout(() => setLoading(true), 700);
    }, []);

  return (
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        
          { !loading ?
            (<PageLoader />) :
            (<Component {...pageProps} />)
          }
      </MantineProvider>
  );
  
}

export default MyApp;