import { fetchMissions } from "../store/actions/postAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Launches } from "../components/launches";
import Pagination from "../components/Pagination";
import styles from "../scss/launches.module.scss";
export default function Launch_News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div className={styles.launchContainer}>
      <h2>The Latest Launch News</h2>
      <Launches data={currentPosts} key={posts.flight_number} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
