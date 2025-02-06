import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc,  query, where, addDoc, setDoc, writeBatch, documentId } from "firebase/firestore";
import products from "./data";

//Esta data no se suele guardar en el repo!! 
const firebaseConfig = {
  apiKey: "AIzaSyAsR-TL_pXrOuOE1Zbl7m4xPv_LbJTGg8U",
  authDomain: "creative-lab-98da1.firebaseapp.com",
  projectId: "creative-lab-98da1",
  storageBucket: "creative-lab-98da1.firebasestorage.app",
  messagingSenderId: "164544546323",
  appId: "1:164544546323:web:327461e6d3ba7a5f25e1e6"
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