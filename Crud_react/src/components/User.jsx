import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const [users,setUsers] =useState([
        {
            title:"111111",
            description:"111111",
            duedate:"111111",
            priority:"111111",
            status  :"True"    }
    ])

    useEffect (()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    },[]);


    const handleDelete = (id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err=>console.log(err))
    }

    const sortByDateAsc = () => {
        const sortedUsers = [...users].sort((a, b) => new Date(a.duedate) - new Date(b.duedate));
        setUsers(sortedUsers); // Update the state with sorted users
    };

    const sortByDateDesc = () => {
        const sortedUsers = [...users].sort((a, b) => new Date(b.duedate) - new Date(a.duedate));
        setUsers(sortedUsers); // Update the state with sorted users
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:3001/search?title=${searchTerm}`)
            .then(res => {
                setSearchResults(res.data);
            })
            .catch(err => console.log(err));
        }

    
  return (
    <>
           

        <h5 class="d-flex vh-20  justify-content-center align-items-center">Assessment for Create Crud Application using  MERN <span class="badge text-bg-secondary">HOME PAGE</span></h5>
        
    <div className="d-flex vh-100 bg-success justify-content-center align-items-center" >
        
     <div  className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add+</Link>
        
        <div class="mb-3">


  <button onClick={sortByDateAsc} className="btn btn btn-outline-primary">Date (Asc)</button>
                    <button onClick={sortByDateDesc} className="btn btn btn-outline-warning ml-2">Date (Des)</button>


</div>
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
                        <td> 
                        {/* <Link to={`/delete/${user._id}` }className='btn btn-danger'  
                         >Delete</Link> */}
                         <button className='btn btn-outline-danger'   onClick={(e)=>handleDelete(user._id)}> Delete</button>
                          </td>

                          <td>
                        <Link to={`/update/${user._id}`} className='btn btn-outline-primary'>
                            Update</Link>
                            </td>
                            <td>
                        <Link  to ={`/readall`}className='btn btn-outline-warning'>
                            Show_all</Link>
                            </td>
                    </tr>
                })
            }

        </tbody>
        </table>
     </div>
    </div>
    <div>
          {/* <label for="exampleFormControlInput1" class="form-label">Search</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search Acc to title........."/> */}

<input type="email"  value={searchTerm} 

onChange={(e) => setSearchTerm(e.target.value)} 
class="form-control" id="exampleFormControlInput1" placeholder="Search Acc to title........."/> 

         
            {/* <input 
                type="text" 
                value={searchTerm} 

                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Enter title" 
            /> */}
            <button onClick={handleSearch} className="btn btn btn-outline-warning ml-2">Search</button>

            
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
                searchResults.map((user)=>{
                return <tr>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td>{user.duedate}</td>
                    <td>{user.priority}</td>
                    <td>{user.status }</td>
                        <td> 
                        {/* <Link to={`/delete/${user._id}` }className='btn btn-danger'  
                         >Delete</Link> */}
                         <button className='btn btn-outline-danger'   onClick={(e)=>handleDelete(user._id)}> Delete</button>
                          </td>

                          <td>
                        <Link to={`/update/${user._id}`} className='btn btn-outline-primary'>
                            Update</Link>
                            </td>
                            <td>
                        
                            </td>
                    </tr>
                })
            }

        </tbody>
        </table>
        </div>
    </>
  )
}

export default User