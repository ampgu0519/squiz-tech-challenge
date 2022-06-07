import './App.css';
import CompanyList from './CompanyList.js';
import { useEffect, useState } from 'react';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://dujour.squiz.cloud/developer-challenge/data";
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => console.log(error));
  },[]) 

  /*function search(rows){
    const columns = rows[0] && Object.keys(rows[0]);
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
  }*/

  return (
    <div>
      {data.map((company) => 
        <CompanyList company = {company} />
      )}
    </div>
    
  );
}

export default App2;