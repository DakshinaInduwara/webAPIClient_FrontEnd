//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Map from './Components/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Map/>}  />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
