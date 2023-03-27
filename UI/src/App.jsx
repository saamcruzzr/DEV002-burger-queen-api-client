
import Waitress from "./views/Waitress.jsx";
import Login from "./views/Login.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
      <nav>
        <Link to="/">Home----</Link> 
        <Link to="/waitress">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login accion = "loguear" />}/>
        <Route path="waitress" element={<Waitress accion = "tomar la orden" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
