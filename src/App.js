import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Route, Routes} from 'react-router-dom'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import Cart from './components/Cart'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<IsPrivate><Cart/></IsPrivate>}/>
      </Routes>
    </div>
  );
}

export default App;
