import React from 'react'
import "./Todo.css"

function todo() {
  const todos = [
    { id: 1, title: "Finish report", description: "Monthly financial report", category: "Work", completed: true },
    { id: 2, title: "Team meeting", description: "Sync with dev team", category: "Work", completed: false },
    { id: 3, title: "Buy groceries", description: "Milk, eggs, and bread", category: "Personal", completed: false },
    { id: 4, title: "Gym", description: "Leg day workout", category: "Personal", completed: true },
    { id: 5, title: "Read book", description: "Finish 'Atomic Habits'", category: "Hobby", completed: false },
    { id: 6, title: "Painting session", description: "Try new watercolor technique", category: "Hobby", completed: true },
  ];

  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div className='container' style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>🗂️ Grouped To-Do List</h1>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <h2>{category}</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {todos
              .filter(todo => todo.category === category)
              .map(todo => (
                <li key={todo.id} style={{ marginBottom: '10px' }}>
                  <span>{todo.completed ? '✅' : '❌'} <strong>{todo.title}</strong></span>
                  <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginLeft: '20px' }}>
                    {todo.description}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default todo