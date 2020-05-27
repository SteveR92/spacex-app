const dropdown = (props) => {
  const selectPosts = (e) => {
    props.setPostsPerPage(e.target.value);
  };

  return (
    <select id="num" onChange={selectPosts} defaultValue={10}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="100">50</option>
    </select>
  );
};

export default dropdown;
