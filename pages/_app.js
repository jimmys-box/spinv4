import '../styles/css/styles.scss';
import { useEffect, useState } from 'react';
// import AppContext from '../Context/AppContext';
// import recupProduits from '../Context/helpers/nonce';

function MyApp({ Component, pageProps }) {
  // const [nonce, setNonce] = useState('');

  // useEffect(() => {
  //   let nonceRecup = recupNonce();
  //   setNonce(nonceRecup)
  // }, [])
  return (
    // <AppContext.Provider
    //   value={{
    //     state: {
    //       nonce: nonce
    //     },
    //     setNonce: setNonce
    //   }}
    // >
      <Component {...pageProps} />
    // </AppContext.Provider>
  )
}

export default MyApp
