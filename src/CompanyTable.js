import './CompanyTable.scss'

function CompanyTable(props){

    const columns = props.data[0] && Object.keys(props.data[0]);
    return (
            <table className = "table">
                <thead>
                    <tr>{props.data[0] && columns.map((heading) =>
                        heading==="name" || heading === "numberOfEmployees"?(
                            <th onClick = {() => props.sortBy(heading)}>
                                {heading} ⇅
                        
                            </th>
                        ) : (
                            <th>{heading}</th>
                        )
                    )} 
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row) =>(

                    <tr>
                        {
                            columns.map(column => (
                            <td data-label = {column}>{row[column]}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default CompanyTable;