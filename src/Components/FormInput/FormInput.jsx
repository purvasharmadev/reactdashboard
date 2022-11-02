import React,{useState} from "react";
import "./formInput.css";

function FormInput(props) {
  const [focused,setFocused] = useState(false)
  const handleFocus = ()=>{
    setFocused(true)
  }
  return (
    <>
      <label>
        {props.label}
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          required={props.required}
          pattern={props.pattern}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
      <span id="error">{props.errorMsg}</span>
      </label>
    </>
  );
}

export default FormInput;
