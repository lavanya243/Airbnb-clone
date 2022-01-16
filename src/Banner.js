import React, { useState } from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
//import { Search } from '@material-ui/icons';
import Search from './Search';
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect"; 

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
        <div className='banner__search'>
        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            
        </div>
            <div className='banner__info'>
         <h1>Go Near</h1><br></br>
            <h4>

      <Typewriter 
  
       onInit={(typewriter)=> { 
  
       typewriter 
        
       .typeString("Plan a different kind of getaway to uncover the hidden gems near you.") 
         
       .pauseFor(1000) 
       
       .start(); 
       }} 
       /> 
   
            
            </h4>
            <Button onClick={()=>history.push('./search')} variant='outlined'
            
            >Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner;