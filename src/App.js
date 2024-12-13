import { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewProduct from "./pages/AddNewProduct";
import AddNewCustomer from "./pages/AddNewCustomer";
import AllProduct from "./pages/AllProduct";
import AllCustomer from "./pages/AllCustomer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import CustomerPage from './pages/CustomerPage';
import Billing from "./pages/Billing";
import './app.css'
function App() {
  const [logged,setLogged] = useState(true);
  const [currentUser,setCurrentUser] = useState("");
  return (
    <div className="app">
    {
      logged?(<div>
        <BrowserRouter>
          <Navbar setLogged={setLogged}/>
          <Routes>
            <Route path="/billing" element={<Billing/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/addproduct" element={<AddNewProduct/>}/>
            <Route path="/addcustomer" element={<AddNewCustomer setCurrentUser={setCurrentUser}/>}/>
            <Route path="/allproduct" element={<AllProduct/>}/>
            <Route path="/allcustomer" element={<AllCustomer setCurrentUser={setCurrentUser}/>}/>
            <Route path="/customerpage" element={<CustomerPage currentUser={currentUser}/>}/>
          </Routes>
        </BrowserRouter>
      </div>):<Login setLogged={setLogged}/>
    }
    </div>
  );
}

export default App;
