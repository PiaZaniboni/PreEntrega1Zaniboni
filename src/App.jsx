import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/500.css'; // Bold
import '@fontsource/roboto/700.css'; // Bold

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a CreativeLab"/>
    </>
  )
}

export default App
