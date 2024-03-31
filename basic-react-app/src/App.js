import React, {useEffect, useState} from 'react';
import './App.css';
import Mybar from './Mybar';
import MyCard from './MyCard';
// var data = require('./attractions.json')

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://www.melivecode.com/api/attractions')
    .then(res=> res.json())
    .then((result) =>{
      console.log(result);
      setData(result)})
  },[])

  return (
    <div className="App">
      <>  
      <Mybar />
      <h1 style={{paddingLeft:'10px'}}>Top Tourist Attraction</h1>
      <div className="grid-container">
        {data.map((item)=>
          <MyCard 
          key= {item.id}
          name = {item.name} 
          coverimage = {item.coverimage} 
          detail={item.detail} />

        )}

      </div>
      </>
  
      
    </div>
  );
}

export default App;
