import { useState } from 'react';
import './App.css';
import Form from "./Component/Form";
import ShowItem from "./Component/ShowItem";

function App() {
  const [addList, setAddList] = useState([]);
  const addDataList = (addData) => {
    setAddList((prevdata) => {
      const finalData = [...prevdata, addData];
      let str = JSON.stringify(finalData);
      localStorage.setItem(addData.id, str);
      return finalData;
    })
  }
  return (
    <div className="App">
      <Form onaddDataList = {addDataList}/>
      <ShowItem showatList={addList} />
    </div>
  );
}

export default App;
