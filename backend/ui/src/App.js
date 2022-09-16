// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import ListAdmin from "./pages/ListAdmin";
import AddAdmin from "./pages/AddAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listadmin" element={<ListAdmin />} />
          <Route path="/addadmin" element={<AddAdmin />} />

          <Route path="*" element={<>not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;