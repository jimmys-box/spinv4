// import axios from "axios";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "https://spintop-battle.com",
  consumerKey: "ck_67f6f780ec3323472f7dc5efc58470a4cbfb3f8e",
  consumerSecret: "cs_cfb8e466e0c56546e8bbf2b7d94e5e6c5a990603",
  version: "wc/v3",
  wpAPI: true,
  queryStringAuth: true,
  axiosConfig: {
      headers: {'Content-Type': 'application/json'},
  }
});

// let getNonce = async () => {
//     let contenuPanier = fetch(
//         `https://www.spintop-battle.com/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
//     )
//         .then((panierBrut) => panierBrut.json())
//         .then((panierNet) => {
//             let retour = panierNet;
//             console.log(retour);
//             // console.log(retour);
//             return retour;
//         });
//     return panierApi;
// }



// List products
const getProduits = async () => {

  let listeProduits = await api.get("products", {
        per_page: 20, // 20 products per page
      })
        .then((response) => {
          // Successful request
          // console.log("Response Status:", response.status);
          // console.log("Response Headers:", response.headers);
          // console.log("Response Data:", response.data);
          // console.log("Total of pages:", response.headers['x-wp-totalpages']);
          // console.log("Total of items:", response.headers['x-wp-total']);
          return response.data;
        })
        .catch((error) => {
          // Invalid request, for 4xx and 5xx statuses
          // console.log("Response Status:", error.response.status);
          // console.log("Response Headers:", error.response.headers);
          // console.log("Response Data:", error.response.data);
        })
        .finally((reponse) => {
          // Always executed.
          return reponse
        });

      return listeProduits;

}


// Récupération des infos d'une fiche produit
const getProduit = async (id) => {
  let infosProduit = await api.get(`products/${id}`, {
    per_page: 20, // 20 products per page
  })
    .then((response) => {
      // Successful request
      // console.log("Response Status:", response.status);
      // console.log("Response Headers:", response.headers);
      // console.log("Response Data:", response.data);
      // console.log("Total of pages:", response.headers['x-wp-totalpages']);
      // console.log("Total of items:", response.headers['x-wp-total']);
      return response.data;
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      // console.log("Response Status:", error.response.status);
      // console.log("Response Headers:", error.response.headers);
      // console.log("Response Data:", error.response.data);
    })
    .finally((reponse) => {
      // Always executed.
      return reponse
    });

  return infosProduit;
}

const getPanier = async () => {
  let contenuPanier = await api.get(`cart`)
    .then((response) => {
      return response.data
    });

  return contenuPanier;
}

const ajoutAuPanier = async (id, count) => {
  let ajout = await api.post(`cart/add-item`, {
    id: id,
    quantity: count
  })
    .then((response) => {
      return response.data
    })

  return ajout;
}

// const getNonce = async () => {
//     let nonce;
//     // await fetch(`https://spintop-battle.com/wp-json/wc/store/v1/cart`)
//     //     .then((res) => res)
//     //     .then((reponse) => {
//     //         let headers = reponse.headers["X-WC-Store-API-Nonce"];
//     //         console.log(headers);
//     //         let response = reponse.json();
//     //         return response;
//     //     })
//     //     .then((response) => {
//     //         // console.log(response);
//     //         nonce = response;
//     //     });

//     // Ajout au panier
//     await axios({
//         url: `https://spintop-battle.com/wp-json/wc/store/v1/cart/`,
//         // `https://spintop-battle.com/wp-json/wc/store/v1/cart/add-item`
//         // `https://spintop-battle.com/wp-json/wc/store/v1/products`
//         method: 'get',
//         headers: {
//             // Body
//             // {
//             //     // id: 12775,
//             //     // quantity: 1
//             // },

//         // Headers
//         "Content-Type": "application/json;charset=UTF-8"
//         }
//     })
//       .then((res) => {
//         let response = res;
//         return response;
//       })
//       .then((response) => {
//         // let grow = response.headers['nonce'];
//         let grow = response.headers;
//         let donnees = response.data;
//         // console.log(nonce);
//         return grow;
//         // return donnees;
//         // nonce = (response.headers['Nonce']);
//       })
//       .then((infos) => {
//         console.log(infos);
//       })

//     return nonce;
// }

const recupProduits = async () => {
    let produits = await getProduits();
    return produits;
}

const ficheProduit = async (id) => {
  let ficheProduit = await getProduit(id);
  return ficheProduit;
}

const panier = async () => {
  let panier = await getPanier();
  return panier;
}

const ajout = async (id, count) => {
  let ajouter = await ajoutAuPanier(id, count);
  return ajouter;
}

module.exports = {
  recupProduits: recupProduits,
  ficheProduit: ficheProduit,
  panier: panier,
  ajout: ajout
}