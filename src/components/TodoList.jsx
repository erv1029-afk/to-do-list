import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  editingId,
  editText,
  setEditText,
  onToggle,
  onDelete,
  onEdit,
  onSave
}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          editText={editText}
          setEditText={setEditText}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </ul>
  );
}