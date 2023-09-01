import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout/GlobalLayout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={<GlobalLayout />}
        >
          <Route index element={<Home />} />
          <Route path="phone-book" element={<PhoneBook />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
