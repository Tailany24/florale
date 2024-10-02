// pages/_app.js
import '../styles/globals.css'; // Importe seu CSS global
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas); // Adiciona os ícones sólidos à biblioteca

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
