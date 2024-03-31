
import './App.css';
import Cards from './Cards';
import Navbar from './Navbar';
import React,  {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://www.melivecode.com/api/attractions')
    .then(res=>res.json())
    .then((result =>{
      setData(result)}))
  }, [])


  return (
    <div className="App">
        <Navbar />
        <h1 className='main-title' >Top Tourist Destination</h1>
        <div className='grid-container'>
          {data.map((item)=>
            <Cards  
            key= {item.id}
            name = {item.name} 
            coverimage = {item.coverimage} 
            detail={item.detail} />
          )}

        </div>
    </div>
  );
}

export default App;
