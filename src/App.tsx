import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={ <Home /> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
