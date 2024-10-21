import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'


export default function Read() {
const [data,setData] = useState([]);

useEffect(() => {
 const data= axios.get('https://jsonplaceholder.typicode.com/posts')
 .then(res => setData(res.data));
 console.log(data);
},[]);
 
const handleDelete =(id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
 .then(res => setData(data.filter(item => item.id!== id)));
};
   
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React application with CRUD operations.
      <Link to="/create" className='btn btn-primary'>Create</Link></p>
      <table className="table  table-hover">

  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{
 data.map((item) => (
  <tr key={item.id}>
    <th scope="row">{item.id}</th>
    <td className='w-25'>{item.title}</td>
    <td className='w-50'>{item.body}</td>
    <td>
      <Link to={`/update/${item.id}`} className="btn btn-primary">
        Edit
      </Link>
      <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
    </td>
  </tr>
))
}
  </tbody>
</table>
    </div>
  )
}
