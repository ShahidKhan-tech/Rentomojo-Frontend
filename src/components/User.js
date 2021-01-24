import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import PostsData from './PostsData';
import Post from './Post';
import axios from "axios";

const User = () => {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",

  });
  const[posts,setPosts]=useState([]);
  console.log(user.posts);
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      
      <ul className="list-group w-50 mx-auto">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
      <button className="bt btn-success mt-4 rounded">Get Detail</button>
      <Post data={id}/>
    </div>

  );
};

export default User;