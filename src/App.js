
import './App.css';
import Nav from './Component/Navbar';
import {BrowserRouter,} from "react-router-dom"

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Nav />
     </BrowserRouter>
    </div>
  );
}

export default App;
