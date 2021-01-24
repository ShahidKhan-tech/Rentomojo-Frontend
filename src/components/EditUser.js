import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const EditUser=()=> {
    let history=useHistory();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:'',

    })
     
    const{name,username,email,phone,website}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    useEffect(() => {
       loadUser();
    }, [])
    
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push('/post');
    }

    const loadUser=async()=>{
    const result=await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    }


    return (
    <form className="mt-4" onSubmit={e=>onSubmit(e)}>
  <div className="mb-3 col-md-4 mx-auto">
    <input type="text" className="form-control" name="name" 
    value={name} placeholder="Name" onChange={e=>onInputChange(e)}/>
  </div>
  <div className="mb-3 col-md-4 mx-auto">
    <input type="text" className="form-control" name="username"
     value={username} placeholder="Username" onChange={e=>onInputChange(e)}/>
  </div>
  <div className="mb-3 col-md-4 mx-auto">
    <input type="text" className="form-control" name="email"
     value={email} placeholder="E-mail" onChange={e=>onInputChange(e)}/>
  </div>
  <div className="mb-3 col-md-4 mx-auto">
    <input type="text" className="form-control" name="phone"
     value={phone} placeholder="Phone Number" onChange={e=>onInputChange(e)}/>
  </div>
  <div className="mb-3 col-md-4 mx-auto">
    <input type="text" className="form-control" name="website"
     value={website} placeholder="Website" onChange={e=>onInputChange(e)}/>
  </div>

  <button type="submit" className="btn btn-primary">Edit User</button>
</form>
)
}

export default EditUser

