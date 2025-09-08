import { Routes, Route } from "react-router-dom";
import Menu from './pages/Menu';
import Jumbo from './pages/Jumbo';
import Glossario from "./pages/Glossario";
import Resumos from "./pages/Resumos";

function App(){
    return (
        <Routes>
            <Route path = '/' element={<Jumbo/>}/>
            <Route path= '/menu' element={<Menu/>}/>
            <Route path= '/glossario' element={<Glossario/>}/>
            <Route path= '/resumos' element={<Resumos/>}/>
        </Routes>
    )
};

export default App;