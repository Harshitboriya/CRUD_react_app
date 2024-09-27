import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayUser = () => {
    const [users,setUsers] =useState([
       
    ])
    useEffect (()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    },[]);
  return (
    <>
        <h5 class="d-flex vh-20  justify-content-center align-items-center">Assessment  Application  <span class="badge text-bg-secondary">Display</span></h5>

    <div className="d-flex vh-100 bg-success justify-content-center align-items-center" >
     <div  className='w-50 bg-white rounded p-3'>
        <table className='table'>
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                return <tr>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td>{user.duedate}</td>
                    <td>{user.priority}</td>
                    <td>{user.status }</td>
                      
                    </tr>
                })
            }

        </tbody>
        </table>
     </div>
    </div>

    </>
  )
}

export default DisplayUser
