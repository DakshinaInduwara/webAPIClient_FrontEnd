//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Map from './Components/Map';
import TrainList from './Components/TrainList';
import HomePage from './Components/HomePage'; 
import Gallery from './Components/Gallery'; 
import History from './Components/History'; 
import Services from './Components/Services'; 
import Contact from './Components/Contact'; 
import Terms from './Components/Terms'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Map/>}  /> */}
        <Route path='/' element={<HomePage/>}  />
        <Route path='/trainlist/' element={<TrainList/>}  />
        <Route path='/trainlist/:id' element={<Map/>}  />
        <Route path='/gallery/' element={<Gallery/>}  />
        <Route path='/histoty/' element={<History/>}  />
        <Route path='/services/' element={<Services/>}  />
        <Route path='/contact/' element={<Contact/>}  />
        <Route path='/terms/' element={<Terms/>}  />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
