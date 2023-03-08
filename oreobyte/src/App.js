import './App.css';
import Navbar from './components/Navbar/Navbar';
import Screen from './components/Screen';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Webview from './Webview';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/Screen" element={<Screen/>}></Route>
        <Route path="/webview" element={<Webview/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
