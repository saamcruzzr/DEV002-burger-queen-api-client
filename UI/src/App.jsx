
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Waitress from "./views/Waitress.jsx";
import Login from "./views/Login.jsx";
import Kitchen from "./views/Kitchen.jsx";
import Admin from "./views/Admin.jsx";
import './App.css'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login title = "login" />}/>
//         <Route path="waitress" element={<Login title = "mesero" />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      {/* <nav className="barra-nav">
        <Link to="/">Login   ----</Link> 
        <Link to="/waitress">Waitress   ----</Link>
        <Link to="/kitchen">Kitchen   ----</Link>
        <Link to="/admin">Admin   ----</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="waitress" element={<Waitress />}/>
        <Route path="kitchen" element={<Kitchen accion = "holi crayoli" />}/>
        <Route path="admin" element={<Admin accion = "3312" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
