import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './Components/Layout/Landing';
import Auth from './views/Auth';

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/login' element={<Auth authRoute="login"/>}/>
        <Route path='/register' element={<Auth authRoute="register"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


