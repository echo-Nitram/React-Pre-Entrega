import logo from './logo.svg';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ResponsiveAppBar from './Component/navBar';
import ItemListContainer from './Component/itemListContainer';


function App() {

  return (
    <>
      <ResponsiveAppBar />
      <ItemListContainer greeting={"Bienvenido"} />
    </>
  )
}

export default App;
