import './App.css';
import {Routes , Route } from "react-router-dom"
import Home from './Components/HomeComponent/Home';
import Parts from './Components/CarPartsComponent/Parts';
import One from './Components/ShowOne/One';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Admin from './Components/Admin-Dashboard/Admin';
import AdminUsers from "./Components/Admin-Users/AdminUsers"
import AdminCarParts from "./Components/Admin-CarParts/AdminCarParts"
import Update from './Components/UpdateUser/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/car-parts' element= {<Parts/>}/>
        <Route path='/one-part' element = {<One/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element ={<Admin/>}/>
        <Route path='/admin/users' element = {<AdminUsers/>}/>
        <Route path="/admin/car-parts" element={<AdminCarParts/>}/>
        <Route path="/admin/user/edit/:id" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
