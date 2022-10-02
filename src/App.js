import Home from './routes/homepage';
import Navbar from './routes/navigation/navbar';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication';

const Shop = () => {
  return <h1>Test</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes >
  );
};

export default App;
