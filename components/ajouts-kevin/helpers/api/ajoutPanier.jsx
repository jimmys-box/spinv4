import { panier, ajout } from "../../../../Context/helpers/appelsApi";

const ajoutParApi = async (id, count) => {

  let retour = {};

  // Ajout au panier
  await axios.post(
    `https://spintop-battle.com/wp-json/wc/store/v1/cart/add-item`,
    //Body
    {
        id: id,
        quantity: quantite
    },
    // Headers
    {
        headers: { 
            'Content-Type': 'application/json',
            'Nonce': noncefourni
        }
    }
)
  .then((res) => res)
  .then((result) => {
    let donneesProduit = (result.data.items[0]);
    let idProduit = (donneesProduit.id).toString();
    let clefProduit = (donneesProduit.key).toString();
    let quantiteProduit = (donneesProduit.quantity).toString();
    let nomProduit = (donneesProduit.name).toString();
    let nonceRes = noncefourni;
    retour = {
        idProduit: idProduit,
        clefProduit: clefProduit,
        quantiteProduit: quantiteProduit,
        nonce: nonceRes,
        message: `Vous avez bien ajouté ${quantiteProduit} ${nomProduit}.`
    };
  });

  return retour;
}


// Déclaration du composant principal
const ajoutPanier = async (idProduit, count) => {

    // // Ajout au cart du produit concerné par appel API
    // const ajoutParApi = (id, count) => {
    //     let retour = fetch(`https://jimmyslab.club:7295/produits/ajoutpanier?id=${id}`)
    //       .then((res) => res.json())
    //       .then((result) => {
    //         let message = result;
    //         console.log(message);
    //         return message;
    //       });
    //     return retour;
    //   };

    // let valeurRetour = await ajoutParApi(idProduit);
    // return valeurRetour;

    // let ajout = await ajoutParApi(idProduit, count);

    let retour = await ajout(idProduit, count);
    
    return retour;
}

export default ajoutPanier;