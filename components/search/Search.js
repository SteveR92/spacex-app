import { useRef } from "react";

const searchbar = ({ onSearch }) => {
  const input = useRef(null);

  const handleSubmit = (e) => {
    const search = input.current.value;
    console.log({ search });
    onSearch(search);
    e.preventDefault();
  };

  return (
    <div>
      <h2>Search:</h2>
      <form>
        <input type="text" ref={input} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default searchbar;
