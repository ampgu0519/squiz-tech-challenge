import React, {useState} from "react";
import './CompanyList.css'

function CompanyList({company}){
    return(
        <div>
            <hr></hr>
            <h1> {company.name} </h1>
            <h3> {company.country} </h3>
            <h3> {company.industry} </h3>
            <h3> {company.numberOfEmployees} </h3>
        </div>
    )
}
export default CompanyList;