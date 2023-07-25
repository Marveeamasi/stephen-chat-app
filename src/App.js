import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import RegisterAdmin from "./pages/RegisterAdmin"
import RegisterUser from "./pages/RegisterUser"
import UserChat from "./pages/UserChat"
import AdminChat from "./pages/AdminChat"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"


const App = () => {
const {currentUser} = useContext(AuthContext)

const ProtectedRoute = ({children}) => {
  if(!currentUser){
    return <Navigate to={`/login`}/>;
  }
  return  children
};

return(
  <div className="m-0 p-0 w-[100vw]">
   <BrowserRouter>
    <Routes>
    <Route path="/login"  element={ <Login/> } />
    <Route path="/signadmin"  element={ <RegisterAdmin/> } />
    <Route path="/signuser"  element={ <RegisterUser/> } />
    <Route path="/chatuser"  element={<ProtectedRoute><UserChat/></ProtectedRoute>  } />
    <Route path="/chatadmin"  element={ <AdminChat/> } />
    </Routes>
</BrowserRouter>
  </div>
)

}

export default App