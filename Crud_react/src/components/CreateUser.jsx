import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
    
  const[title,settitle] = useState();
  const[description,setdescription] = useState();
  const[duedate,setduedate] = useState();
  const[priority,setpriority] = useState();
  const[status,setstatus] = useState();
  const navigate = useNavigate();

 

  const Submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/create" , {title,description,duedate, priority,status})
    .then (result => 
      {
         console.log(result)
         navigate('/')
        })
        .catch (error=>console.log("bot able to submit "+error)
      
      )
        
  }

  return (
 <div>
          <h5 class="d-flex vh-20  justify-content-center align-items-center">Assessment  Application <span class="badge text-bg-secondary">Display</span></h5>

     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center" >
     <div  className='w-50 bg-white rounded p-3'>
      
       <form onSubmit={Submit}>
     <h1>Add users</h1>
       <div className='container'> 
        <h6>title  </h6> <input type="text" onChange={(e)=>settitle(e.target.value)}/><br /></div>
       <div className='container'> 
        <h6>description</h6>  <input type="text" onChange={(e)=>setdescription(e.target.value)} /><br /></div>
       <div className='container'> 
        <h6>duedate</h6>  <input type="text" onChange={(e)=>setduedate(e.target.value)} /><br /></div>
       <div className='container'> 
        <h6>priority</h6> <input type="text" onChange={(e)=>setpriority(e.target.value)} /><br /></div>
       <div className='container'> 
        <h6>status</h6>  <input type="text" onChange={(e)=>setstatus(e.target.value)} /><br /></div>

        <button className='btn btn-success'>Submit</button>
       </form>
       
       </div>
       </div>
    </div>
  )
}

export default CreateUser