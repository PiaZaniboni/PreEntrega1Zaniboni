import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc,  query, where, addDoc, setDoc, writeBatch, documentId } from "firebase/firestore";
import products from "./data";


//Esta data no se suele guardar en el repo!! 
const firebaseConfig = {
  apiKey: import.meta.env.FIRESTORE_APIKEY,
  authDomain: "creative-lab-98da1.firebaseapp.com",
  projectId: "creative-lab-98da1",
  storageBucket: "creative-lab-98da1.firebasestorage.app",
  messagingSenderId: "164544546323",
  appId: import.meta.env.FIRESTORE_APPID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default async function getAsyncData (){

    const collectionRef = collection (db, "products") ;
    const productsSnapshot = await getDocs(collectionRef);
    
    const documentsData = 
        productsSnapshot.docs.map( 
                doc => {
                return { ... doc.data(), id: doc.id }
            } 
    );


    return documentsData;
} 

export async function getAsyncItemById ( itemID ){
    const docRef = doc( db , "products" , itemID);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();

    return docData;
} 

export async  function getAsyncItemByCategory ( categoryId ){
    const q = query( collection(db, "products"), where("category", "==", categoryId.replace(/^./, (c) => c.toUpperCase()) ) );
    const productsSnapshot = await getDocs(q);
    
    const documentsData = 
        productsSnapshot.docs.map( 
            doc => {
            return { ... doc.data(), id: doc.id }
        });
    
    return documentsData;
}

export async function exportProducts(params) {
    const batch = writeBatch(db);

    products.forEach( item => {
        const itemId = `${item.id}`;
        delete item.id;
        const newDoc = doc(db, "products", `item-${itemId}`);
        batch.set(newDoc, item);
    });

    const commitRes = await batch.commit();

    console.log( "Subida de productos terminada: " , commitRes );
}

export async function createBuyOrderWithStockUpdate(order) {    
    const orderRef = collection( db, "orders" );
    const productsRef = collection( db, "products" );

    const batch = writeBatch(db);

    const productsOrderIds = order.cartItems.map ( (item) => item.id );
    const querySnapshot = await getDocs( query( productsRef, where ( documentId(), "in", productsOrderIds ) ));
    const docsToUpdate = querySnapshot.docs;

    let itemsSinStock = [];

    docsToUpdate.forEach((doc) => {
        let { stock } = doc.data();

        let itemInCart = order.cartItems.find((item) => item.id === doc.id);
        let countInCart = itemInCart.count;

        let newStock = stock - countInCart;
 
        if (newStock < 0) {
            itemsSinStock.push(doc.id);
        }else{
            batch.update(doc.ref, { stock: newStock });
        }
    });

    console.log(itemsSinStock);

    const itemsSinStockTitles = itemsSinStock.map ( item => item.title ).join(", ");

    if (itemsSinStock.length > 0){
        console.log("entre", itemsSinStock);
        throw new Error( `Disculpanos! No tenemos stock de los siguientes productos: ${itemsSinStockTitles}`);
    }else{

        await batch.commit();
        console.log(order);

        let newOrder = await addDoc( orderRef, order );

        return newOrder.id;
    }

}