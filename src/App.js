import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/home/home'
import Ascensao from './components/pages/ascensao/ascensao';
import Build from './components/pages/build/build';
import Gameplay from './components/pages/gameplay/gameplay';
import Constelacao from './components/pages/constelacao/constelacao';


function App() {
  return (
    
      
    <div className="App">
      
        <BrowserRouter className={Navbar}>
          <Routes>
            <Route path='/' element= {<Home/>}/> 
            <Route path='/ascensao' element= {<Ascensao/>}/>
            <Route path='/build' element= {<Build/>}/>
            <Route path='/build' element= {<Build/>}/>
            <Route path='/gameplay' element= {<Gameplay/>}/>
            <Route path='/constelacao' element= {<Constelacao/>}/>
           
          </Routes> 
        </BrowserRouter>
    </div>
        
  );
}

export default App;
