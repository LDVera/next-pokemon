import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes/darktheme';
import { Layout } from '@/components/layouts';

export default function App({ Component, pageProps }: AppProps) {
  return (

    
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    

    
  )
}
