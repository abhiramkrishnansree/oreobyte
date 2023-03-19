import './App.css';
import Navbar from './components/Navbar';
import Screen from './components/Screen';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';


import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Webview from './Webview';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Webview/>}></Route>
        <Route path="/Navbar" element={<Navbar/>}></Route>
        <Route path="/Screen" element={<Screen/>}></Route>
        <Route path="/Screen2" element={<Screen2/>}></Route>
        <Route path="/Screen3" element={<Screen3/>}></Route>
        <Route path="/Screen4" element={<Screen4/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
