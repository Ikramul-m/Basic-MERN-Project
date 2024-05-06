import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  async function getData() {
    const response = await fetch("http://localhost:5000/api/user");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  }

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/user/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setError("Deleted Succesfully");

      setTimeout(() => {
        setError("");
        getData();
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center">All Members</h2>

      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{ele.name}</h3>
                <h6 className="card-title">Email: {ele.email}</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Age: {ele.age}
                </h6>

                <a
                  href="#"
                  className="card-link"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </a>
                <a href="#" className="card-link">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
