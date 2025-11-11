import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const {
    editingId,
    editText,
    setEditText,
    toggleComplete,
    deleteTodo,
    startEditing,
    saveTodo,
  } = useContext(TodoContext);

  const isEditing = editingId === todo.id;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => saveTodo(todo.id)}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
          <button
            onClick={() => deleteTodo(todo.id)}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}