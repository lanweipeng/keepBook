import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Prilist from './components/PriceList'
const items=[
  {
    "id":1,
    "title":"和gem去吃饭",
    "price":200,
    "date":"2008-09-30",
    "category":{
      "id":"1","name":"吃饭","type":"outcome"
    }
  }
]
function App() {
  return (
    <div className="App">
      
      <Prilist 
      items={items}
      onModifiyItem={(item)=>{alert(item.id)}}
      onDeleteItem={(item)=>{alert(item.id)}}
      />
    </div>
  );
}

export default App;
