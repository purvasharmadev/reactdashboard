import './App.css';
import {Route,Routes} from 'react-router-dom'
import DashBoard from './Pages/DashBoard';
import Home from './Pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  );
}

export default App;
