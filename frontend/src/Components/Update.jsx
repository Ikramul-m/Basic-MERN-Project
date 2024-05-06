import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const getSingleUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const result = await response.json();
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };

    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      navigate("/read");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center">Edit the data</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
