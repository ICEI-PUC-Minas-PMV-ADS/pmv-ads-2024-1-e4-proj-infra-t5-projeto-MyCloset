// App.js
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Looks from './pages/Looks';
import Cloth from './pages/Cloth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Base from './pages/Base'; 
import 'react-toastify/dist/ReactToastify.css';

function AppContent() {
  const location = useLocation();
  const hideFooterRoutes = ['/sign-in', '/sign-up', '/'];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pb-20"> {/* espaco para o footer fixado */}
        <Routes>
          <Route path="/" element={<Base />} /> 
          <Route path="/looks" element={<Looks/>} />
          <Route path="/Cloth" element={<Cloth />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
