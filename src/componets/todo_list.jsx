import React, { useRef, useState } from 'react';
import './todo_list.css';

const Todo = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const clicked = () => {
    const newWord = inputRef.current.value;

    if (newWord!== "") {
      setData(prevData => [...prevData, newWord]);
      inputRef.current.value = "";
    }
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
        <ol className="activityList">
          {data.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
