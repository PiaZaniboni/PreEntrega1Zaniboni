import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Fonts
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/500.css'; // Bold
import '@fontsource/roboto/700.css'; // Bold

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Listado de productos"/>} />
            <Route path="/category/:catid" element={<ItemListContainer greeting="Listado de productos de la categoria "/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer className="text-center font-sans w-full bg-slate-950 text-white py-4 mt-10">
        <small>Programado por Maria Pia Zaniboni</small>
      </footer>
    
    </div>
  )
}

export default App
