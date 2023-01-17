export const SearchBox = ({ value, onChange }) => {
  return (
    <input name="filter" type="text" value={value} onChange={onChange}></input>
  );
};
