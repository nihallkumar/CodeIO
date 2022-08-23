import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import JoinRoom from './Components/JoinRoom';
import Login from './Components/Login';
import Compiler from './Components/Compiler';
import Saved from './Components/Saved';
import Signup from './Components/Signup';


function App() {
  return (
    <>
      <Header />

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/joinroom" element={<JoinRoom/>} />
          <Route exact path="/compiler" element={<Compiler />} />
          <Route exact path="/saved" element={<Saved />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
