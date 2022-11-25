import React, { useEffect, useState } from "react";
import ProduitItem from "../produit-item";
import { recupProduits } from "../../Context/helpers/appelsApi";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicProductItems = dynamic(() => import('../produit-item'), {
    suspense: true,
})
function MainProduct() {

    const [data, setData] = useState([]);
    const [prod, setProd] = useState([]);
    const [query, setQuery] = useState("");
    // const [noncefourni, setNoncefourni] = useState("");
    // const [listeNette, setListeNette] = useState([]);


    // const fetchData = () => {
    //     fetch("https://jimmyslab.club:7295/produits/produits-woocommerce")
    //       .then((res) => res.json())
    //       .then((result) => {
    //         setData(result.donnees);
    //         setProd(structurationProds(result.donnees));
    //         setNoncefourni((result.nonce).toString());
    //         // console.log(result);
    //       });
    //   };

    const fetchData = async () => {

        let listeProd = [];

        let listeProduits = await recupProduits();

        for (let produit of listeProduits) {

            let source;

            // console.log(produit)
            if ((produit.images)[0]) {
                // if (produit) {
                let img = (produit.images)[0];
                source = img.src;
            } else {
                source = "https://spintop-battle.com/wp-content/uploads/2022/11/Toupie-Beyblade-Burst-Takara-Tomy-Superking-B-178-random-Booster-vol24-boite-devant-vue-face-officielle.jpg";
            }
            // console.log(source); 

            listeProd.push(
                {
                    id: produit.id,
                    slug: produit.slug,
                    key: produit.id,
                    name: produit.name,
                    price: produit.price,
                    currentPrice: produit.currentPrice,
                    color: produit.colors,
                    images: source
                }
            )

        }

        setProd(listeProd);
    }

    useEffect(() => {
        fetchData();
    }, []);

    //   const structurationProds = (produits) => {

    //     let listeProd = [];

    //     for (let produit of produits) {

    //         let source;

    //         // console.log(produit)
    //         // if ((produit.images)[0]) {
    //         if (produit) {
    //             // let img = (produit.images)[0];
    //             // source = img.src;
    //             source = "https://spintop-battle.com/wp-content/uploads/2022/11/Toupie-Beyblade-Burst-Takara-Tomy-Superking-B-178-random-Booster-vol24-boite-devant-vue-face-officielle.jpg"
    //         } else {
    //             source = "https://spintop-battle.com/wp-content/uploads/2022/11/Toupie-Beyblade-Burst-Takara-Tomy-Superking-B-178-random-Booster-vol24-boite-devant-vue-face-officielle.jpg";
    //         }
    //         // console.log(source); 

    //         listeProd.push(
    //             {
    //                 id: produit.id,
    //                 slug: produit.slug,
    //                 key: produit.id,
    //                 name: produit.name,
    //                 price: produit.price,
    //                 currentPrice: produit.currentPrice,
    //                 color: produit.colors,
    //                 images: source
    //             }
    //         )
    //     }

    //     // return listeProd;
    //     setProd(listeProd);
    //   }

    //   structurationProds(prod);

    return (

        <section className="HomePageProducts">
            <div className="HomePageProductsContainer">
                <header className="HomePageProductsIntro">
                    <h2>Tous nos produits</h2>

                </header>


                <div className="products-list">


                    {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}


                    {prod.map((prod) => {



                        return (
                            <Suspense fallback={`Loading...`}>
                                <DynamicProductItems
                                    id={prod.id}
                                    slug={prod.slug}
                                    key={prod.id}
                                    name={prod.name}
                                    price={prod.price}
                                    currentPrice={prod.currentPrice}
                                    color={prod.color}
                                    images={prod.images}
                                />
                            </Suspense>
                        )
                    }
                    )}

                </div>
            </div>
        </section>

    )
}
export default MainProduct;
