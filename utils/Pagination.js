import styles from "../scss/utils/paginate.module.scss";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className={styles.ul}>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={styles.li}
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
