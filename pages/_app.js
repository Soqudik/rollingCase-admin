import '@/styles/globals.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default function App({ Component, pageProps }) {
  return (
    <TonConnectUIProvider manifestUrl="https://rollingcase.vercel.app/tonconnect-manifest.json">
      <Component {...pageProps} />
    </TonConnectUIProvider>
  );
}
