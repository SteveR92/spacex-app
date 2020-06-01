import { fetchMissions } from "../store/actions/postAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Launches } from "../components/data_fetching/UpcomingLaunches";
import Pagination from "../utils/Pagination";
import Dropdown from "../utils/Dropdown";
import Layout from "../components/layout/Layout";
import styles from "../scss/flights/launches.module.scss";
import astronaut from "../images/astronaut.png";
import store from "../store/store";
export default function Launch_News() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //Fetching posts and filtering out past launches
  let { posts } = useSelector((state) => state.post);
  posts = posts.filter((post) => post.upcoming);
  let launchData = posts.reverse();

  //Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  if (store.getState().post.loading) {
    return (
      <Layout>
        <div className={styles.launchContainer}>
          <p>launching...</p>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={styles.launchContainer}>
          <div>
            <div className={styles.dropdown}>
              <Dropdown setPostsPerPage={setPostsPerPage} />
            </div>
            <Launches data={currentPosts} key={posts.flight_number} />
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
          <div className={styles.astroDiv}>
            <img src={astronaut} alt="astronaut" />
          </div>
        </div>
      </Layout>
    );
  }
}
