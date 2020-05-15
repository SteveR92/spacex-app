import { useDispatch, useSelector } from "react-redux";
import { fetchMissions } from "../store/actions/postAction";
import { useEffect, useState } from "react";
import { Launches } from "../components/launches";
import Loading from "../components/loading";
export default function Launch_News() {
  const [isLoading, setLoading] = useState(true);
  const { posts } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (isLoading) {
    return <Loading />;
  } else if (!isLoading) {
    return (
      <div>
        <h2>The Latest Launch News</h2>
        <Launches data={posts} key={posts.flight_number} />
      </div>
    );
  }
}
