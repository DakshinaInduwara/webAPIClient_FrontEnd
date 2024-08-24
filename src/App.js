//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Map from './Components/Map';
import TrainList from './Components/TrainList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Map/>}  /> */}
        <Route path='/' element={<TrainList/>}  />
        <Route path='/trainlist/:id' element={<Map/>}  />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
