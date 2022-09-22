import Home from './routes/homepage';
import Navbar from './routes/navigation/navbar';
import SignIn from './routes/auth/sign-in';
import { Route, Routes } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return <h1>Test</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
<<<<<<< HEAD
        <Route path='/sign-in' element={<SignIn />} />
=======
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
>>>>>>> revert-1-develop
      </Route>
    </Routes >
  );
};

export default App;
