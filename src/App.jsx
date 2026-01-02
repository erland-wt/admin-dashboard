import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/dashboard" />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  );
}

export default App;