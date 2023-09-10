import { Routes, Route } from "react-router-dom";

import { Paslaugos, Kontaktai, Atsiliepimai, Home} from "./components";
import Parduotuves from "./components/Parduotuves";

function App() {
  return (
    <>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/paslaugos" element={<Paslaugos/>}/> 
        <Route path="/atsiliepimai" element={<Atsiliepimai/>}/> 
        <Route path="/kontaktai" element={<Kontaktai/>}/> <Route path="/parduotuves" element={<Parduotuves/>}/> 
        <Route path="/atsiliepimai" element={<Atsiliepimai/>}/> 
        
      </Routes>
    </>
  );
}

export default App;
