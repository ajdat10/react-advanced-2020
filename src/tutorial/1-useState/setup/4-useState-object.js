import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')


  const changeMessage = () => {
    if (message === "random message") {
    //   setPerson({ ...person, message: "hello world" })
      setMessage('hello world')
    }
  else {
    // setPerson({...person, message: "random message"})
      setMessage('random message')
    }
    
}
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
  <button type="button" className='btn' onClick={changeMessage}>change message</button></>;
};

export default UseStateObject;
