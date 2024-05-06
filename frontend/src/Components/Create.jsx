import React from "react";

const Create = () => {
  return (
    <div className="container my-2">
      <h2 className="text-center">Enter the data</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age
          </label>
          <input type="Number" class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
