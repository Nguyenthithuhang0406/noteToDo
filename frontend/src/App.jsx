import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './Components/Layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/authContext';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/login' element={<Auth authRoute="login"/>}/>
        <Route path='/register' element={<Auth authRoute="register"/>}/>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;


