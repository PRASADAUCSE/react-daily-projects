
import EmployeeDetails from './Components/Employee'
import { Data } from './Components/Data'
import Hook1 from './Components/StateHook'
import CartPage from './Pages/Cart'
import {data, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import Navbar from './Components/Navbar'
import UserPage from './Pages/User'

function App() {
  

  return (
    <>
    
    <Navbar />
         <Routes>
      <Route path = "/" element = {<h1>This is base page</h1>}/>
      <Route path = "/home" element = {<HomePage/>}/>
      <Route path = "/about" element = {<AboutPage/>}/>
      <Route path = "/cart" element = {<CartPage/>}/>
      <Route path = "/employee" element = {
      Data.map(item=> {
        return <EmployeeDetails  name = {item.name} role = {item.role} designation = {item.designation} department={item.department} image = {item.image}/>
    })
    }/>
 
      <Route path = "/user/:name" element = {<UserPage/>}/>
    </Routes>
    
    </>
  )
}

export default App
