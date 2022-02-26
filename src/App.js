import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./mycomponents/Login";

import {Routes, Route} from "react-router-dom";
import {Dashboard_main} from './mycomponents/dashboard/Dashboard_main';


function App() {
  return (
    <div className="App">
      <Routes>
       < Route path="/" element={<Login />} />
       < Route path="/Dashboard_main" element={<Dashboard_main />} />
       
     
       
      
      </Routes>
      
      
    </div>
  );
}

export default App;
