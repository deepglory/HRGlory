import './App.css';
import { BrowserRouter as Router,Route,Link ,Switch} from "react-router-dom";
import Employement from './components/Pages/Employement';
import DashBoard from "./components/Pages/DashBoard";

function App() {
  return (
    <div className="App">
    
  <DashBoard/>
    
    </div>
  );
}

export default App;
