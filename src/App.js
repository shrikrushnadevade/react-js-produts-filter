import './App.css';
import Row from './Component/Row';
import Data1 from '../src/branch1.json';
import Data2 from '../src/branch2.json';
import Data3 from '../src/branch3.json';
import { useEffect, useState } from 'react';

function App() {
  const [branch1, setBranch1] = useState([]);
  const [branch2, setBranch2] = useState([]);
  const [branch3, setBranch3] = useState([]);
  const [FinalmergedData, setFianlMergedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setBranch1(Data1.products);
    setBranch2(Data2.products);
    setBranch3(Data3.products);
  }, []);

  useEffect(() => {
    const merged = [...branch1, ...branch2, ...branch3];
    const final = mergeDataByName(merged);
    setFianlMergedData(final);
  }, [branch1, branch2, branch3]);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = FinalmergedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredData.sort((a, b) => a.name.localeCompare(b.name));


  return (
    <div className='container border'>
      <div className="search-container mt-4 mb-4">
        <label htmlFor="search" className='mr-2'>Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter search term"
        />
      </div>


      <table className="table" align='center'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UnitPrice</th>
            <th scope="col">Sold</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <Row index={index} id={item.id} key={index} name={item.name} unitPrice={item.unitPrice.toFixed(2)} sold={item.sold} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
