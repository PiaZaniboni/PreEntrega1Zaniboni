import products from "./data";
const tiempoEspera = 500;

export default function getAsyncData (){
    console.log("Solicitando datos");

    const promiseData = new Promise ( (resolve ) => {
        setTimeout ( () => {
            if ( products.length > 0 ) {
                console.log("Resuelto!");
                resolve ( products );
            }else{
                reject ("No encontramos productos");
            }
        }, tiempoEspera);
    });

    console.log("Promesa generada");
    return promiseData;
} 

export function getAsyncItemById ( itemID ){
    console.log( "Solicitando producto by id: " , itemID );

    const promiseData = new Promise ( (resolve, reject ) => {

        setTimeout ( () => {
            const requestedProduct = products.find( (product) => product.id === Number(itemID) );
             if ( requestedProduct ) {
                console.log("Resuelto!");
                resolve ( requestedProduct );
            }else{
                reject ("No encontramos el producto con el id: ", itemID );
            }
        }, tiempoEspera);
    });

    console.log("Promesa generada");
    return promiseData;
} 

export function getAsyncItemByCategory ( categoryId ){
    console.log( "Solicitando productos de la categoria: " , categoryId );

    const promiseData = new Promise ( (resolve, reject ) => {

        setTimeout ( () => {
            const requestedProducts = products.filter( (product) => product.category.toLowerCase() === categoryId.toLowerCase() );
             if ( requestedProducts.length > 0 ) {
                resolve ( requestedProducts );
            }else{
                reject ("No encontramos el producto con el id: ", itemID );
            }
        }, tiempoEspera);
    });

    console.log("Promesa generada");
    return promiseData;
} 