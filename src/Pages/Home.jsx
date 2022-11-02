import React from "react";
import UserForm from "../Components/UserForm/UserForm";
import home from "../Assets/home.svg";

function Home() {
  return (
    <>
    <h1 className="heading">Exchange Rate</h1>
        <div className="flex">
      <UserForm />
      <div className="img-container">
        <img className="img-responsive" src={home} />
      </div>
    </div>
    </>

  );
}

export default Home;
