import React, { useRef, useState } from 'react';
import './todo_list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const clicked = () => {
    const newWord = inputRef.current.value;

    if (newWord !== "") {
      setData(prevData => [...prevData, newWord]);
      inputRef.current.value = "";
    }
  };
  const removeItem = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="firstbox">
      <div className="secondbox">
        <h2>TO-DO-LIST</h2>
        <hr />
        <div className="inputtick">
          <input className="inputbox" type="text" placeholder="Enter Your activity" ref={inputRef} />
          <button className="tick" onClick={clicked}>✔</button>
        </div>
        <ul className="activityList">
          {data.map((items, index) => (
            <li key={index}>{items} < FontAwesomeIcon icon={faXmark} onClick={() => removeItem(index)} /></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;