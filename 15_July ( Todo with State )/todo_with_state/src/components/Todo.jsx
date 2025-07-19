import { useState } from "react";

let initialTodo = [
  {
    task: "wake up 7am",
    isComplete: false,
  },
];
function ToDo() {
    const [todo, setTodo] = useState(initialTodo);
    const [text, setText] = useState("");
    const [boolean, setBoolean] = useState(false)
    function addTask(){
      setTodo([...todo,{ task:text, isComplete:boolean }])
      setText("");
      setBoolean()
    }

    return(
      <div>
        <input
        onChange={(e)=>setText(e.target.value)}
        value={text}
        type="text"
        />
        <select
        onChange={(e) => setBoolean(e.target.value === 'true')}
        value={boolean}
        >
            <option value="true">True</option>
            <option value="false">False</option>
        </select>
        <button onClick={addTask}>Add Task</button>

        <ul style={{
          listStyle : "none"
        }}>
          {todo.map((v,i)=>{
            return (
            
              <li key={i}>
                <span
                style={{
                  textDecoration: v.isComplete? "line-through" : "none",
                }}
                >
                 {v.task}
                </span>
              </li>
            
            )
          })}
        </ul>
      </div>
    )
}

export default ToDo;