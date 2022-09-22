import Home from './routes/homepage';
import Navbar from './routes/navigation/navbar';
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
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes >
  );
};

export default App;
