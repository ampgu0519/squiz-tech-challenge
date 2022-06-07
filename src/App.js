import './App.scss';
import CompanyTable from './CompanyTable.js';
import { useEffect, useState } from 'react';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const [order, setOrder] = useState("Ascend");

  useEffect(() => {
    const url = "https://dujour.squiz.cloud/developer-challenge/data";
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => console.log(error));
  },[]) 

  function search(rows){
    return rows.filter(row => 
      row.country.toLowerCase().indexOf(countrySearch.toLowerCase()) > -1 &&
      row.industry.toLowerCase().indexOf(industrySearch.toLowerCase()) > -1
    );
  }
  function sortBy(header){
  
    if(order === "Ascend"){
        const sorted = [...data].sort((a,b) =>
            a[header].toString().toLowerCase() > b[header].toString().toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("Descend");
    }
    if(order === "Descend"){
        const sorted = [...data].sort((a,b) =>
            a[header].toString().toLowerCase() < b[header].toString().toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("Ascend");
    }
  }

  return (
    <div>

      <div className = 'column filterSelect'> 
        <img src = {require('./squizLogo.png')} alt = 'Squiz Logo'></img>
        <h2>Filter Options:</h2>
        Country: <input type = "text" value = {countrySearch} onChange = {(e) => setCountrySearch(e.target.value)}/>
        Industry: <input type = "text" value = {industrySearch} onChange = {(f) => setIndustrySearch(f.target.value)}/>
      </div>
      <div className='column tableDisplay'> 
        <CompanyTable 
          data = {search(data)}
          sortBy = {sortBy}
        />
      </div>
    </div>
    
  );
}

export default App;
