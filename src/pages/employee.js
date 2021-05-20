import React,{useState, useEffect} from "react"
import SearchBox from "../components/SearchBox"
import DataTable from "../components/DataTable"
import API from "../utils/API"

function Employee(){
    const [columns, setColumns] = useState([{name:"Picture",width:"width:10%"}, {name: "Name",width:"width:10%"}, {name: "Phone",width:"width:20%"}, {name: "Email" ,width:"width:20%"}, {name: "DOB" ,width:"width:20%"}])
    
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        API.getUsers().then(response =>{
            setUsers(response.data.results)
        })
    },[])
    const handleSort=()=>{

    }
    return (
        <>
    {console.log(columns)}
            <SearchBox />
            <DataTable headings={columns} users={users} handleSort={handleSort} />
        </>
    )
}

export default Employee;