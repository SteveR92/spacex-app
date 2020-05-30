import styles from "../scss/utils/dropdown.module.scss";

const dropdown = (props) => {
  const selectPosts = (e) => {
    props.setPostsPerPage(e.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      <select id="num" onChange={selectPosts} defaultValue={10}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="100">50</option>
      </select>
    </div>
  );
};

export default dropdown;
