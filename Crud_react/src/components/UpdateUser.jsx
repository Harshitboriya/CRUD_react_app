import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {
    const {id} = useParams();
    

  const[title,settitle] = useState();
  const[description,setdescription] = useState();
  const[duedate,setduedate] = useState();
  const[priority,setpriority] = useState();
  const[status,setstatus] = useState();
  const navigate = useNavigate();

  useEffect (()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result =>{ console.log(result)
      settitle(result.data.title)
      setdescription(result.data.description)
      setduedate(result.data.duedate)
      setpriority(result.data.priority)
      setstatus(result.data.status)

    })
    .catch(err => console.log(err));
},[]);

  const update =(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/updataUser/" +id, {title,description,duedate, priority,status})
    .then (result => 
      {
         console.log(result)
         navigate('/')
        })
        .catch (error=>console.log(error))
        
  }

  return (
 <div>
          <h5 class="d-flex vh-20  justify-content-center align-items-center">Assessment  Application   <span class="badge text-bg-secondary">Update</span></h5>

     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center" >
     <div  className='w-50 bg-white rounded p-3'>
      
       <form onSubmit={update}>
     <h1>Update User Data</h1>
        <div className='container'> 
        <h6>title  </h6> <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/><br /></div>
       <div className='container'> 
        <h6>description</h6>  <input type="text"  value={description} onChange={(e)=>setdescription(e.target.value)} /><br /></div>
       <div className='container'> 
        <h6>duedate</h6>  <input type="text"  value={duedate}onChange={(e)=>setduedate(e.target.value)} /><br /></div>
       <div className='container'> 
        <h6>priority</h6> <input type="text" value={priority} onChange={(e)=>setpriority(e.target.value)} /><br /></div>
       <div className='container'> 
        <h6>status</h6>  <input type="text" value={status} onChange={(e)=>setstatus(e.target.value)} /><br /></div>

        <button className='btn btn-success'>Submit</button>
       </form>
       
       </div>
       </div>
    </div>
  )
}

export default UpdateUser