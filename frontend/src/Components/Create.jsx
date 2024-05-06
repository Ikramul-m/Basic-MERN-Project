import React, { useState } from "react";

const Create = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  

  return (
    <div classNameName="container my-2">
      <h2 classNameName="text-center">Enter the data</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input type="Number" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
