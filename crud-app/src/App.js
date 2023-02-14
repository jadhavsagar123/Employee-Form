import AllEmployees from './Component/AllEmployee';
import AddEmployee from './Component/AddEmployee';
import EditEmployee from './Component/EditEmployees';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound';
import Login from './Component/Login' 
import Signup from "./Component/Signup"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<Signup /> } />
        <Route path="all" element={<AllEmployees /> } />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
