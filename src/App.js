import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from "./Login/loginforms";
import Navbar from "./Components/Navbar";
import Contato from "./Contato"
import Forum from "./Forum";
import CadastroForm from "./Login/cadastroform";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Forum' element={<Forum />} />
        <Route path='/cadastro' element={<CadastroForm />} />

      </Routes>
      </BrowserRouter>    
      <Footer />
    </div>
  );
}

export default App;