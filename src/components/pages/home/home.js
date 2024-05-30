import React from 'react' 
import Navbar from '../../Navbar';
import './home.css'
import Background from '../home/1332755.jpeg'

function Home (){
    return (
    <div>
        <Navbar/>
        <div className='main-content'>
            <div class="apresent">
                <h1>Neuvillette</h1>               
            </div>
            <img alt='' src={Background}></img>
        </div>
    </div>
    )
}
 
export default Home;