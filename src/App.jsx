import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/cartContext.jsx";
import CartContainer from "./components/CartContainer.jsx";
import CartConfirmation from "./components/CartConfirmation.jsx";

//import { exportProducts } from "./data/database";

//Fonts
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/500.css'; // Bold
import '@fontsource/roboto/700.css'; // Bold

function App() {

  return (
    
  <div className="min-h-screen flex flex-col">
    <CartContextProvider>
      <BrowserRouter>
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Listado de productos"/>} />
              <Route path="/category/:catid" element={<ItemListContainer greeting="Listado de productos de la categoria "/>} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/orderconfirmation/:orderconfirmation" element={<CartConfirmation />} />
            </Routes>
          </main>
      </BrowserRouter>
    </CartContextProvider>
    <footer className="text-center font-sans w-full bg-slate-950 text-white py-4 mt-10">
      <small>Programado por <a className="font-bold" target="_blank" href="https://www.linkedin.com/in/maria-pia-zaniboni/">Maria Pia Zaniboni </a></small>
      {/*<button  onClick={exportProducts}>MIGRAR PRODUCTOS</button>*/}
    </footer>
  </div>
  )
}

export default App
