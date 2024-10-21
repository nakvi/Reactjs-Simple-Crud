import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const { id } = useParams(); // Get post ID from URL
  const [title, setTitle] = useState(''); // Title state
  const [body, setBody] = useState(''); // Body state
  const navigate = useNavigate(); // Navigate between routes

  // Fetch post data once on component mount
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]); // Add id as a dependency to prevent re-fetching on every render

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })
      .then(() => {
        navigate("/"); // Redirect to home page after update
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div className="container">
      <h1>Update Post</h1>
      <p>
        This is a simple React application with CRUD operations.
        <Link to="/" className="btn btn-primary" style={{ marginLeft: '10px' }}>
          Home
        </Link>
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <form
          className="p-5 border rounded bg-light"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              id="body"
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value)} 
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
