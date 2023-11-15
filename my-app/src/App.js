
import './App.css';
import MYbackgroundimage from './components/Homepage';
import LoginPage from './components/login';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>  
        <Route path="/" exact element={<MYbackgroundimage/>} />
        <Route path="/login" element={<LoginPage/>} />
    </Routes>  
    </BrowserRouter>
 );
}

export default App;
