import styles from "../scss/utils/paginate.module.scss";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.list}>
      <nav>
        <ul className={styles.ul}>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={styles.li}
              onClick={() => paginate(number)}
            >
              <a className="page-link">{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
