import './App.css';
import Form from './Component/Form';
import Data1 from '../src/branch1.json'
import Data2 from '../src/branch2.json'
import Data3 from '../src/branch3.json'
import { useEffect, useState } from 'react';

function App() {
  const [branch1, setBranch1] = useState([]);
  const [branch2, setBranch2] = useState([]);
  const [branch3, setbranch3] = useState([]);
  const [FinalmergedData, setFianlMergedData] = useState([]);

  useEffect(() => {
    setBranch1(Data1.products);
    setBranch2(Data2.products);
    setbranch3(Data3.products);
  }, []);

  useEffect(() => {
    const merged = [...branch1, ...branch2, ...branch3];
    const Final = mergeDataByName(merged);
    setFianlMergedData(Final);
  }, [branch1, branch2, branch3])

  function mergeDataByName(data) {
    const mergedDataByName = [];
    data.forEach((item) => {
      const existingItem = mergedDataByName.find((mergedItem) => mergedItem.name === item.name);

      if (existingItem) {
        existingItem.unitPrice += item.unitPrice;
        existingItem.sold += item.sold;
      } else {
        mergedDataByName.push({ ...item });
      }
    });
    return mergedDataByName;
  }

  return (
    <div className='container'>
      <table className="table" align='center'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UnitPrice</th>
            <th scope="col">Sold</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {FinalmergedData.map((item) => (
            <Form key={item.id} id={item.id} name={item.name} unitPrice={item.unitPrice} sold={item.sold} />
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default App;
