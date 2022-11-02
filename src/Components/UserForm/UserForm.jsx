import React, { useState } from "react";
import './userForm.css'
import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import { saveDataToLocal, getDataFromLocal } from "../../Hooks/useLocalStorage";

function UserForm() {
  // To move to dashboard component after submit
  const navigateTo = useNavigate();

  // States to save user information
  const [userInfo, setUserInfo] = useState(
    getDataFromLocal("userInfo", {
      username: "",
      email: "",
    })
  );

  // Saving userInfo on onChange event
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // Saving Form Data to localStorage
  const handleSubmit = (e) => (
    e.preventDefault(),
    saveDataToLocal("userInfo", userInfo, {}),
    navigateTo("/dashboard")
  );

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form-container">
      <FormInput
        value={userInfo.username}
        pattern="^[A-Za-z0-9]{3,16}$"
        type="text"
        label="user name"
        name="username"
        placeholder="enter name"
        onChange={onChange}
        errorMsg="username should be between 3-16 characters and should not include any special characters"
        required={true}
      />
      <FormInput
        value={userInfo.email}
        type="email"
        label="email"
        name="email"
        placeholder="enter mail"
        onChange={onChange}
        required={true}
        errorMsg="enter a valid email address"
      />
      <button type="submit">Get Rates</button>
    </form>
    </div>

  );
}

export default UserForm;
