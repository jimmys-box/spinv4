import React, { useState } from 'react';

// Déclaration du composant principal
const VoirPanier = async () => {

    const [noncefourni, setNoncefourni] = useState("");
    const [data, setData] = useState('');
    const [produits, setProduits] = useState("");


    // Récupération du panier par appel API
    const recupPanierParApi = async () => {
        fetch("https://jimmyslab.club:7295/produits/voirpanier")
          .then((panierBrut) => panierBrut.json())
          .then((panierNet) => {
            setProduits(panierNet.donnees);
            setNoncefourni((panierNet.nonce).toString());
          });
      };

    let panier = await recupPanierParApi();
    return {
        produits: produits,
        nonce: noncefourni
    }
}

export default VoirPanier;