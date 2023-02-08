import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Adminlogin from './pages/Adminlogin';
import Dashboard from './pages/Dashboard';
import EditPage from './pages/EditPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/edit/:data" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
