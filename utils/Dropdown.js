const dropdown = (props) => {
  const selectPosts = (e) => {
    props.setPostsPerPage(e.target.value);
  };

  return (
    <select id="num" onChange={selectPosts}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
};

export default dropdown;
