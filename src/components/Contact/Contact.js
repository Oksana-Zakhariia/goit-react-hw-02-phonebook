export const Contact = ({ item, onDelete }) => {
  return (
    <div id={item.id}>
      <span>{item.name} </span>
      <span>{item.number}</span>
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
