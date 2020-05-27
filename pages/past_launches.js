import { fetchMissions } from "../store/actions/postAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Launches } from "../components/data_fetching/PastLaunches";
import Pagination from "../utils/Pagination";
import Dropdown from "../utils/Dropdown";
import styles from "../scss/flights/launches.module.scss";

export default function Launch_News() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //Fetching posts and filtering out past launches
  let { posts } = useSelector((state) => state.post);
  posts = posts.filter((post) => !post.upcoming);

  //Pagination
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

      <Dropdown setPostsPerPage={setPostsPerPage} />
      <Launches data={currentPosts} key={posts.flight_number} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
