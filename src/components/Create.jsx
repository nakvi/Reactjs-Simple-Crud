import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
     .then((response) => {
        console.log(response);
        navigate('/');
      })

  }


  return (
    <div className="container">
      <h1>Welcome to the Create Page</h1>
      <p>
        This is a simple React application with CRUD operations.
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <form className="p-5 border rounded bg-light" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter your title"
              onChange={(e)=> setTitle(e.target.value)}
           
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              id="body"
              placeholder="Enter your body"
              onChange={(e)=> setBody(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
