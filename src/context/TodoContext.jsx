import { createContext, useState } from "react";
import initialState from "../data/sampleToDos";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  
  const [todos, setTodos] = useState(
    initialState.map(todo => ({
      id: todo.id,
      text: todo.title,
      completed: todo.completed
    }))
  );

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const saveTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        editingId,
        editText,
        setEditText,
        addTodo,
        toggleComplete,
        deleteTodo,
        startEditing,
        saveTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}