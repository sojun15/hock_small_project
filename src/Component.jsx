import React from "react";

function Component({ user }) {
  return (
      <div className="card card-compact bg-base-100 w-96 shadow-xl ">
        <figure>
          <img src={user.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2>Name: {user.username}</h2>
          <p>Email: {user.email}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
  );
}

export default Component;
