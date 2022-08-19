import Home from './routes/homepage';
import Navbar from './routes/navigation/navbar';
import SignIn from './routes/auth/sign-in';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
