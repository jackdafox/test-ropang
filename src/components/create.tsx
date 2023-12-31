"use client";

type TodoItemProps = {
  id: number;
  addOrder: (id: number) => void;
};

export function TodoItem({id, addOrder }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={`${id}`}
        value={id}
        type="Add New"
        className="btn flex flex-col items-center"                 
        onClick={(e) => addOrder(id)}
      />
    </li>
  );
}
