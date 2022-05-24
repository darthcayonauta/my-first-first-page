import React from "react";
import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'reactstrap'



function ApiFetch()
{
    //some
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const [data,setData] = useState();

    //datos
    const infoRequest = async ()=>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setData( responseJSON );
        console.log( responseJSON );
    }

    useEffect( ()=>{
        infoRequest();
    },[]);

   return(

    
   
   
   <div className="container">
            <h2>Lista de cosas raras</h2>
            <hr/>
            <Table size="sm">
                
                {
                    !data ? 'Loading.....': 
                    data.map( (datillo,index)=>{
                        return <tr>
                            <td>{datillo.id}</td> <td>{datillo.title}</td></tr>
                    })
                }
            </Table>
   </div>) 

}

export default ApiFetch;